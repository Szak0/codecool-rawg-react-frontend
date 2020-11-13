import React, { useRef, useState, useContext } from "react";
import StarRatings from "react-star-ratings";
import { Link, useHistory } from "react-router-dom";
import Platforms from "../UI/platform-icons/Platforms";
import NoImageUrl from "../../static/noImagePlaceholder/no_image_to_show_.webp";
import axios from "axios";
import { Rating } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../contexts/AuthContext";

const GameItem = ({ game }) => {
  const [userInfo] = useContext(AuthContext);

  const [videInfo, seVideoInfo] = useState({
    vidRef: useRef(null),
  });

  const handleWish = (e) => {
    var bodyFormData = new FormData();
    const email = localStorage.getItem("userEmail");
    bodyFormData.append("gameId", game.id);
    bodyFormData.append("background_image", game.background_image);
    bodyFormData.append("name", game.name);
    bodyFormData.append("rating", game.rating);
    bodyFormData.append("released", game.released);
    bodyFormData.append("userEmail", email);

    const token = localStorage.getItem("token");
    const url = `http://localhost:5000/api/wishlist/add`;
    axios
      .post(url, bodyFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("error");
        } else if (err.request) {
          // client never received a response, or request never left
        } else {
          // anything else
        }
      });
    e.target.innerHTML = "";
    console.log(e.target);
  };

  function cropImage(imgUrl) {
    if (imgUrl) {
      let directoryPath = imgUrl.split("/").reverse()[2];
      let serverPath = imgUrl.split("/").reverse()[1];
      let imgCode = imgUrl.split("/").reverse()[0];
      let resizedImgUrl = `https://api.rawg.io/media/crop/600/400/${directoryPath}/${serverPath}/${imgCode}`;
      return resizedImgUrl;
    }
    return "";
  }
  return (
    <div className="game-card">
      <div className="media-container">
        {game.clip ? (
          <div className={"image-cover"}>
            <img
              className={"img-card"}
              src={cropImage(game.background_image)}
              alt={game.name}
            />

            {/*
            <button onClick={() => handlePlayVideo} className={"play-button"}>
              PLAY
            </button>
             <video
              onClick={(e) => e.target.pause()}
              ref={videInfo.vidRef}
              controlsList="nodownload"
              muted
              type="video/mp4"
              width="100%"
              height="100%"
            >
              <source src={game.clip.clip} type="video/mp4"></source>
              <source src="Video.ogg" type="video/ogg"></source>
            </video> */}
          </div>
        ) : (
          <div>
            {game.background_image ? (
              <img
                className={"img-card"}
                src={cropImage(game.background_image)}
                alt={game.name}
              />
            ) : (
              <img className={"img-card"} src={NoImageUrl} alt={game.name} />
            )}
          </div>
        )}
      </div>

      <div className={"game-card-info"} key={game.rating + game.name}>
        <div>
          <Link to={"/game/" + game.id} className={"normalize-link"}>
            <h3 className="title-game-item">{game.name}</h3>
          </Link>
        </div>
        <span>{game.released}</span>
        <Platforms platforms={game.platforms} />
        <div className={"rating-container"}>
          {userInfo.userEmail == "undefined" ||
          userInfo.userEmail == null ? null : (
            <div style={{ float: "right" }}>
              <Button onClick={async (e) => handleWish(e)} color="secondary">
                Add to wishes
              </Button>
            </div>
          )}

          {/* <button onClick={async (e) => handleWish(e)}>Favorite</button> */}

          <div className={"rating-info"}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Rating: {game.rating}</Typography>
              <Rating
                name="simple-controlled"
                value={game.rating}
                onChange={(event, newValue) => {}}
              />
            </Box>
            {/* <StarRatings
              rating={game.rating}
              starRatedColor="white"
              starEmptyColor="black"
              numberOfStars={5}
              name="game-rating"
              starDimension="20px"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
