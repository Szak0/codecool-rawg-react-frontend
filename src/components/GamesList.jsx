import React, { useContext } from "react";
import { GamesContext } from "./contexts/GamesContext";
import GameItem from "./GameItem";

const GamesList = () => {
  const [data, games, filters, setFilters] = useContext(GamesContext);
  return (
    <div className={"game-list-container"}>
      <h1>{data.seo_title}</h1>
      <section className="games-container">
        {games.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </section>
    </div>
  );
};

export default GamesList;
