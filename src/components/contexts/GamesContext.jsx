import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const GamesContext = createContext();

export const GamesProvider = (props) => {
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
    <GamesContext.Provider value={[games, setGames]}>
      {props.children}
    </GamesContext.Provider>
  );
};
