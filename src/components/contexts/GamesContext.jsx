import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import queryString from "query-string";

export const GamesContext = createContext();

export const GamesProvider = (props) => {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({
    page: 1,
    search: "",
    ordering: "",
    dates: "",
    page_size: 18,
  });

  useEffect(() => {
    console.log(filters);
    const paramString = queryString.stringify(filters);
    console.log(paramString);
    const fetchData = async () => {
      const request = await axios(
        `https://api.rawg.io/api/games?` + paramString
      );
      console.log(request.data);
      setData(request.data);
      setGames(request.data.results);
    };
    fetchData();
  }, [filters]);

  return (
    <GamesContext.Provider value={[data, games, filters, setFilters]}>
      {props.children}
    </GamesContext.Provider>
  );
};
