import React, { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import Platforms from './Platforms'

=======
import Platforms from "./Platforms"
>>>>>>> a13c606198a744c2ce7af44942d60c8e89754977

const GameDetails = () => {

    const [game, setGame] = useState([]);
    const [platforms, setPlatforms] = useState([])
  let id = window.location.href.split('/').reverse()[0];

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios(
        `https://api.rawg.io/api/games/${id}`
      );
      
      setGame(request.data);
      setPlatforms(request.data.platforms);
<<<<<<< HEAD

=======
>>>>>>> a13c606198a744c2ce7af44942d60c8e89754977
    };
    fetchData();
  });


  

  return (
    <div >
        <h1>{game.name}</h1>
        <img src={game.background_image} alt="" style={{width: "20vw"}}/>
        <p>{game.released}</p> 
<<<<<<< HEAD
      <p>{game.description_raw}</p> 
      <p><Platforms platforms={platforms}/></p>     
=======
      <p>{game.description_raw}</p>    
      <p><Platforms platforms={platforms}/></p>  
>>>>>>> a13c606198a744c2ce7af44942d60c8e89754977
    </div>
  );
};

export default GameDetails;
