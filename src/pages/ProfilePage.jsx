import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GamesList from "../components/game-cards/GamesList";
import WishListContainer from "../components/wishlist/WishListContainer";

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`http://localhost:5000/api/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(request.data);
      console.log(request.data);
      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = axios.create(
          {
            baseURL: `http://localhost:5000/api/wishlist`,
            timeout: 20000,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const request = await client.get();
        console.log(request.data);

        if (request.data) {
          setGames((game) => [...game, ...request.data]);
        } else {
          setIsError(true);
        }

        console.log(request.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  const getRegDate = (date) => {
    if (date) {
      return date.split("T")[0];
    }
  };

  const getUpperCase = (str) => {
    if (str) return str.toUpperCase();
  };

  return (
    <div>
      <div className={"user-profile"}>
        <div>
          <h2># {data.id}</h2>
          <h1>{data.userName}</h1>
          <span>{data.email}</span>
          <div>{getRegDate(data.registrationDate)}</div>
        </div>

        <h3>{getUpperCase(data.userName)}'s Wishlist</h3>
        <WishListContainer games={games} />
      </div>
    </div>
  );
};

export default ProfilePage;
