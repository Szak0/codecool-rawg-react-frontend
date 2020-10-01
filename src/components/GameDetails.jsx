import React, { useEffect, useState } from "react";
import axios from "axios";
import Platforms from "./Platforms";

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
        <h1>{game.name}</h1>
        <img src={game.background_image} alt="" style={{width: "20vw"}}/>
        <p>{game.released}</p> 
      <p>{game.description_raw}</p>    
      <p><Platforms platforms={game.platforms}/></p>  
    </div>
  );
};

export default GameDetails;
