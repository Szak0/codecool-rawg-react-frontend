import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const TopNewsContext = createContext();

export const TopNewsProvider = (props) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios("https://api.rawg.io/api/games");
      console.log(request.data.results);
      setGames(request.data.results);
    };
    fetchData();
  }, []);

  return (
    <TopNewsContext.Provider value={[games, setGames]}>
      {props.children}
    </TopNewsContext.Provider>
  );
};
