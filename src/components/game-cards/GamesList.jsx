import React, { useContext, useRef, useCallback } from "react";
import { GamesContext } from "../contexts/GamesContext";
import GameItem from "./GameItem";

const GamesList = () => {
  const [
    data,
    games,
    filters,
    setFilters,
    isLoading,
    setGames,
    isError,
  ] = useContext(GamesContext);

  const observer = useRef();
  const lastGameCardRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // console.log("visible");
          setFilters({
            ...filters,
            page: filters.page + 1,
          });
        }
      });
      if (node) observer.current.observe(node);
      // console.log(node);
    },
    [filters, isLoading, setFilters]
  );
  return (
    <div>
      <div className={"flex-container"}>
        <div className={"game-list-container"}>
          <section className="games-container">
            {games.map((game, index) => {
              if (games.length === index + 1) {
                return (
                  <div
                    key={game.name + game.id + "-a" + index}
                    ref={lastGameCardRef}
                  >
                    <GameItem game={game} />
                  </div>
                );
              } else
                return (
                  <GameItem
                    game={game}
                    key={game.name + game.id + "-b" + index}
                  />
                );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
