import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

const ProfilePage = () => {

    let id = window.location.href.split("/").reverse()[0];

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios(`http://localhost:8080/api/user/${id}`);
            setData(request.data);
            console.log(request.data);

            console.log(data);

        };
        fetchData();
    }, [id]);

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
            </div>

        </div>
    )
}

export default ProfilePage
