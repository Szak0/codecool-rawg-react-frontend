import React, { useContext, useEffect, useState } from "react";
import { GamesContext } from "./contexts/GamesContext";
import GameItem from "./GameItem";
import axios from "axios";


const GameDetails = () => {

  const [game, setGame] = useState([])
  let id = window.location.href.split('/').reverse()[0];

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios(
        `https://api.rawg.io/api/games/3328`
      );

      setGame(request.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>{game.name}</p>

    </div>
  );
};

export default GameDetails;
