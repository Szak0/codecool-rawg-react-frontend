import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import queryString from "query-string";

export const GamesContext = createContext();

export const GamesProvider = (props) => {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const firstPage = 1;
  const pageSize = 12;

  const [filters, setFilters] = useState({
    page: firstPage,
    search: "",
    ordering: "-relevance",
    dates: "",
    page_size: pageSize,
  });

  const [pathSuffix, setPathSuffix] = useState("/games?");

  useEffect(() => {
    const fetchData = async () => {
      setIsError(null);
      setIsLoading(true);
      try {
        const client = axios.create({
          baseURL: `https://api.rawg.io/api`,
          timeout: 20000,
        });
        const request = await client.get(
          pathSuffix + queryString.stringify(filters)
        );
        if (request.data.results) {
          setGames((game) => [...game, ...request.data.results]);
        } else {
          setIsError(true);
        }
        console.log(pathSuffix + queryString.stringify(filters));
        console.log(request.data);
        setData(request.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [filters, pathSuffix]);
  return (
    <GamesContext.Provider
      value={[
        data,
        games,
        filters,
        setFilters,
        isLoading,
        setGames,
        isError,
        setPathSuffix,
      ]}
    >
      {props.children}
    </GamesContext.Provider>
  );
};
