import React from "react";
import GameItem from "../game-cards/GameItem";

const GamesLikeThis = (game) => {
  return (
    <div className="similar-games">
      <h3>Games similar to {game.name}</h3>
      <GameItem game={game} />
    </div>
  );
};

export default GamesLikeThis;
