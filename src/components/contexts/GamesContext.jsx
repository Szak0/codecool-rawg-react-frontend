import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import queryString from "query-string";

export const GamesContext = createContext();

export const GamesProvider = (props) => {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    page: 1,
    search: "",
    ordering: "",
    dates: "",
    page_size: 18,
  });

  useEffect(() => {
    setIsLoading(true);
    const paramString = queryString.stringify(filters);
    const fetchData = async () => {
      const request = await axios(
        `https://api.rawg.io/api/games?` + paramString
      );
      setData(request.data);
      console.log(request.data);
      setGames(request.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [filters]);

  return (
    <GamesContext.Provider
      value={[data, games, filters, setFilters, isLoading]}
    >
      {props.children}
    </GamesContext.Provider>
  );
};
