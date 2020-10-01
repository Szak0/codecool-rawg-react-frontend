import React from "react";
import StarRatings from "react-star-ratings";

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
      <div className={"game-card-info"}>
        <div>
          <h3>{game.name}</h3>
        </div>
        <span>{game.released}</span>
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
    </div>
  );
};

export default GameItem;
