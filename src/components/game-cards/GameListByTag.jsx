import GamesList from "./GamesList";
import React, { useContext, useEffect } from "react";
import { GamesContext } from "../contexts/GamesContext";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const GameListByTag = () => {
  const history = useHistory();
  const [data, games, filters, setFilters, isLoading, setGames] = useContext(
    GamesContext
  );

  const { tag } = useParams();

  useEffect(() => {
    const handleTags = () => {
      setFilters({
        page: 1,
        tags: tag.toLowerCase().split(" ").join("-"),
        page_size: 12,
      });
    };
    setGames([]);
    handleTags();
  }, [setFilters, setGames, tag]);

  return (
    <div>
      <h1>{tag}</h1>
      <GamesList />
    </div>
  );
};

export default GameListByTag;
