import React, { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext";

const LoadingRing = () => {
  const [
    data,
    games,
    filters,
    setFilters,
    isLoading,
    setGames,
    isError,
  ] = useContext(GamesContext);
  return (
    <div>
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
        <div className={"loading-ring"}>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingRing;
