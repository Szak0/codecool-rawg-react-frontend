import React, { useEffect, useState } from "react";
import axios from "axios";
import Platforms from "./Platforms";
import { BorderTop } from "@material-ui/icons";

const GameDetails = () => {

    const [game, setGame] = useState([]);
  let id = window.location.href.split('/').reverse()[0];

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios(`https://api.rawg.io/api/games/${id}`);

      setGame(request.data);
    };
    fetchData();
  });

  return (
    <div >
          <div className="gameDetailsTitle">
            
            <img src={game.background_image} alt="" style={{width: "55%", borderRadius: "3px"}} />
            <h1 className="gameDetailsTitleCentered">{game.name}</h1>
          </div>
          <div className="relesaseAndPlatforms">
            <p className="release">Release date: {game.released}</p> 
            <p className="platforms"><Platforms platforms={game.platforms}/></p>
          </div>
          <div className="detailCard"><p>{game.description_raw}</p></div>
          
          
          
    </div>
  );
};

export default GameDetails;
