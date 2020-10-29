import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GamesList from '../components/game-cards/GamesList'
import WishListContainer from "../components/wishlist/WishListContainer";

const ProfilePage = () => {

    let id = window.location.href.split("/").reverse()[0];

    const [data, setData] = useState([]);
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios(`http://localhost:8080/api/user/${id}`);
            setData(request.data);
            console.log(request.data);

            console.log(data);

        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client = axios.create({
                    baseURL: `http://localhost:8080/api/wishlist`,
                    timeout: 20000,
                });
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

    }

    return (
        <div>
            <div className={"user-profile"}>
                <div>
                    <h2># {data.id}</h2>
                    <h1>{data.userName}</h1>
                    <span>{data.email}</span>
                    <div>{getRegDate(data.registrationDate)}</div>
                </div>

                <WishListContainer games={games} />
            </div>

        </div>
    )
}

export default ProfilePage
