import React from "react";

const GameItem = ({ game }) => {
  return (
    <div key={game.name + game.id}>
      <div>
        <h1>{game.name}</h1>
      </div>
      <span>{game.author}</span>
      <span>{game.rating}</span>
    </div>
  );
};

export default GameItem;
