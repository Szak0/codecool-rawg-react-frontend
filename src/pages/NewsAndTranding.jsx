import GamesList from "../components/game-cards/GamesList";
import React, { useContext, useEffect } from "react";
import { GamesContext } from "../components/contexts/GamesContext";

const NewsAndTranding = () => {
  const [
    data,
    games,
    filters,
    setFilters,
    isLoading,
    setGames,
    isError,
    setPathSuffix,
  ] = useContext(GamesContext);

  useEffect(() => {
    const handlePage = () => {
      setFilters({
        ordering: "-relevance",
        discover: "true",
        page: 1,
      });
    };

    setGames([]);
    setPathSuffix("/games/lists/main?");
    handlePage();
  }, [setFilters, setGames, setPathSuffix]);

  return (
    <div>
      <GamesList />
    </div>
  );
};

export default NewsAndTranding;
