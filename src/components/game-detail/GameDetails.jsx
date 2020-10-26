import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Platforms from "../UI/platform-icons/Platforms";
import { Divider } from "@material-ui/core";
import { GamesContext } from "../contexts/GamesContext";
import { useStyles } from "../../Styles";
const GameDetails = () => {
  const classes = useStyles();
  const [
    data,
    games,
    filters,
    setFilters,
    isLoading,
    setGames,
    isError,
  ] = useContext(GamesContext);

  const [game, setGame] = useState([]);
  const [tags, setTags] = useState([]);
  const [genres, setGenres] = useState([]);
  let id = window.location.href.split("/").reverse()[0];
  const setTagPage = (tag) => {
    setGames([]);
    setFilters({ tags: tag.toLowerCase().split(" ").join("-"), page: 1 });
  };
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios(`https://api.rawg.io/api/games/${id}`);
      setGame(request.data);
      setTags(request.data.tags);
      setGenres(request.data.genres);
    };

    fetchData();
  }, [id]);

  return (
    <div className={"flex-container"}>
      <div
        style={{
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <div className="detailContainer">
          <div className="gameBackground">
            <img
              src={game.background_image}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="game-info">
            {" "}
            <h1>{game.name}</h1>
            <div>
              <span>Release date: {game.released}</span>
            </div>
            <Platforms platforms={game.platforms} />
            <div>
              <span>Genre(s): </span>
              {genres.map((genres, index) => (
                <span key={index}>#{genres.name} </span>
              ))}
            </div>
          </div>
          <div className="about-game">
            <h3>About</h3>
            <div
              className={"discription"}
              dangerouslySetInnerHTML={{
                __html: game.description,
              }}
            ></div>
          </div>
          <Divider />
          <div className="tagsInDetails">
            <h3>Tags</h3>
            <br />
            {tags.map((tag, index) => (
              <span key={index} className="oneTag">
                {" "}
                <Link
                  className="normalize-link-tags"
                  to={`/tag/${tag.name}`}
                  onClick={() => setTagPage(tag.name)}
                >
                  #{tag.name}{" "}
                </Link>
              </span>
            ))}
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default GameDetails;
