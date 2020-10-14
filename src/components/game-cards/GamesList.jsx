import React, {
  useContext,
  useRef,
  useCallback,
} from "react";
import { GamesContext } from "../contexts/GamesContext";
import GameItem from "./GameItem";
import LoadingRing from "../UI/loading-ring/LoadingRing";

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

  function numberFormat(n) {
    return String(n).replace(/(.)(?=(\d{3})+$)/g, "$1,");
  }

  return (
    <div>
      <h2>About {numberFormat(data.count)} results</h2>
      <h1>{data.seo_title}</h1>
      <div className={"game-list-container"}>
        <section className="games-container">
          {games.map((game, index) => {
            if (games.length === index + 1) {
              return (
                <div key={game.name + game.id + "-a"} ref={lastGameCardRef}>
                  <GameItem game={game} />
                </div>
              );
            } else
              return <GameItem game={game} key={game.name + game.id + "-b"} />;
          })}
        </section>
      </div>

      {isError ? (
        <h6
          style={{
            fontSize: "38px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          No more to display
        </h6>
      ) : isLoading ? (
        <LoadingRing />
      ) : null}

      <div></div>
    </div>
  );
};

export default GamesList;
