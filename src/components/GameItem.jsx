import React from "react";

const GameItem = ({ game }) => {
  return (
    <div key={game.name + game.id} className="game-card">
      <div>
        <h3>{game.name}</h3>
      </div>
      <span>{game.released}</span>
      <div>
        <span>{game.author}</span>
        <span>{game.rating}</span>
      </div>
    </div>
  );
};

export default GameItem;
