import React, { useContext } from "react";
import { GamesContext } from "./contexts/GamesContext";

const GamesList = () => {
  const [games] = useContext(GamesContext);

  return (
    <div>
      {games.map((game, i) => (
        <div>
          <div>
            <h1>{game.name}</h1>
          </div>
          <span key={game.id}>{game.author}</span>
          <span>{game.rating}</span>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
