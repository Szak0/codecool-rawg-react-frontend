import React, { useEffect, useState } from "react";
import axios from "axios";
import Platforms from "../UI/platform-icons/Platforms";




const GameDetails = () => {

    const [game, setGame] = useState([]);
    const [tags, setTags] = useState([]);
    const [genres, setGenres] = useState([]);
  let id = window.location.href.split('/').reverse()[0];


  useEffect(() => {
    const fetchData = async () => {
      const request = await axios(`https://api.rawg.io/api/games/${id}`);

      setGame(request.data);
      setTags(request.data.tags)
      setGenres(request.data.genres)

    };
    fetchData();
  }, [id]);
  console.log(game.tags)
  return (
    <div className="detailContainer">
          <div className="gameDetailsTitle ">
            
            <img src={game.background_image} alt="" style={{width: "100%", borderRadius: "3px", height: "auto"}} />
            <h1 className="gameDetailsTitleCentered">{game.name}</h1>
          </div>
          
            <p className="release">Release date: {game.released}</p> <br/>
            <p className="platforms"><Platforms platforms={game.platforms}/></p><br/>
          <div className="tagsInGenres"> <p className="oneGenre">Genre(s):</p>{genres.map((genres, index) => (<p key={index} className="oneGenre">  {genres.name}  </p>))}</div>

          <div className="detailCard"><p>{game.description_raw}</p></div>
          <div className="tagsInDetails"> {tags.map((tag, index) => (<p key={index} className="oneTag"> #{tag.name}  </p>))}</div>
          </div>
  );
};

export default GameDetails;
