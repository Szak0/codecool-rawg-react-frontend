import React from "react";
import GameItem from "../game-cards/GameItem";
import WishListItem from "../wishlist/WishListItem"

const GamesLikeThis = (games) => {
  return (
    <div className={"flex-container"}>
      <div className={"game-list-container"}>
        <section className="games-container">
          {games.games.map((game, index) => {
            return (
              <div
                key={game.name + game.id + index}>
                <WishListItem game={game} />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default GamesLikeThis;
