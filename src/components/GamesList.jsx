import React, { useContext } from "react";
import { GamesContext } from "./contexts/GamesContext";
import GameItem from "./GameItem";

const GamesList = () => {
  const [data, games, filters, setFilters] = useContext(GamesContext);
  return (
    <div>
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesList;
