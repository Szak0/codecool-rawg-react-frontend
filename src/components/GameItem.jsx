import React from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import Platforms from "./Platforms";

const GameItem = ({ game }) => {
  return (
    <div key={game.name + game.id} className="game-card">
      <div className="video-container">
        {game.clip ? (
          <video src={game.clip.clip} />
        ) : (
          <img src={game.background_image} alt={game.name} />
        )}
      </div>
      <Link to={"game/" + game.id} className={"normalize-link"}>
        <div className={"game-card-info"}>
          <div>
            <h3>{game.name}</h3>
          </div>
          <span>{game.released}</span> <Platforms platforms={game.platforms} />
          <div className={"rating-info"}>
            <span>{game.author}</span>
            <StarRatings
              rating={game.rating}
              starRatedColor="black"
              numberOfStars={5}
              name="game-rating"
              starDimension="26px"
            />

            <span className={"rating-number"}>{game.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameItem;
