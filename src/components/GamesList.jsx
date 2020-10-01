import React, { useContext } from "react";
import { GamesContext } from "./contexts/GamesContext";
import GameItem from "./GameItem";
import Pagination from "../components/Pagination";

const GamesList = () => {
  const [data, games, filters, setFilters, isLoading] = useContext(
    GamesContext
  );
  if (isLoading)
    return (
      <div className={"loading-ring"}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  else
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
