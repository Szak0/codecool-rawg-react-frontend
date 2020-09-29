import React, { useContext } from "react";
import { GamesContext } from "./contexts/GamesContext";
import GameItem from "./GameItem";

const GamesList = () => {
  const [data, games, filters, setFilters] = useContext(GamesContext);
  const paginate = 1;
  return (
    <div>
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
      <div>
        <button
          onClick={() =>
            setFilters(
              filters.page > 1
                ? { ...filters, page: filters.page - paginate }
                : { ...filters, page: filters.page }
            )
          }
        >
          PREV
        </button>
        <button
          onClick={() =>
            setFilters({ ...filters, page: filters.page + paginate })
          }
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default GamesList;
