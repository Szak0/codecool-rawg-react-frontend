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
    ordering: "",
    dates: "",
    page_size: pageSize,
  });

  useEffect(() => {
    const paramString = queryString.stringify(filters);
    const fetchData = async () => {
      setIsError(null);
      setIsLoading(true);
      try {
        const request = await axios({
          url: `http://localhost:8080/api/games?` + paramString,
        });
        if (request.data.results){
          setGames((game) => [...game, ...request.data.results]);
        } else {
          setIsError(true);
        }
        setData(request.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [filters]);
  return (
    <GamesContext.Provider
      value={[data, games, filters, setFilters, isLoading, setGames, isError]}
    >
      {props.children}
    </GamesContext.Provider>
  );
};
