import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import queryString from "query-string";

export const GamesContext = createContext();

export const GamesProvider = (props) => {
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({
    page: 1,
  });

  useEffect(() => {
    const paramString = queryString.stringify(filters);
    console.log(paramString);
    const fetchData = async () => {
      const request = await axios(
        `https://api.rawg.io/api/games?` + paramString
      );
      console.log(request.data.results);
      setGames(request.data.results);
    };
    fetchData();
  }, [filters]);

  return (
    <GamesContext.Provider value={[games, filters, setFilters]}>
      {props.children}
    </GamesContext.Provider>
  );
};
