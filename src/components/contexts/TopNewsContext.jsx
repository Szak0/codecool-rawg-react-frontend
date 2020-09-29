import React, { useEffect, useState, createContext } from "react";
import axios from "axios";


export const TopNewsContext = createContext()


export const TopNewsProvider = props => {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const request = await axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=3d33dc24e219473c9573b09cf7e87d97');
            console.log(request.data.articles);
            setArticles(request.data.articles)
        };
        fetchData();

    }, []);


    return (
        <TopNewsContext.Provider value={[articles, setArticles]}>
            {props.children}
        </TopNewsContext.Provider>
    )
}

