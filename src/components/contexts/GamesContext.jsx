import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import queryString from "query-string";
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
export const GamesContext = createContext();

export const GamesProvider = (props) => {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const firstPage = 1;
  const pageSize = 12;

  const [filters, setFilters] = useState({
    page: firstPage,
    search: "",
    ordering: "",
    dates: "",
    page_size: pageSize,
  });

  useEffect(() => {
    const paramString = queryString.stringify(filters);
    console.log(paramString, "param string");
    const fetchData = async () => {
      setIsError(null);
      setIsLoading(true);
      try {
        const client = axios.create({
          baseURL:  `http://localhost:8080/api`,
          timeout: 20000
        })
        const request = await client.get('/games?' + paramString, {
          onDownloadProgress: progressEvent => {
            console.log(progressEvent.loaded);
            console.log(progressEvent);
            let percentCompleted = Math.floor(progressEvent.loaded / progressEvent.total * 100)
            console.log('completed: ', percentCompleted)
          }});
       console.log(request);
        if (request.data.results){
          setGames((game) => [...game, ...request.data.results]);
        } else {
          setIsError(true);
        }
        setData(request.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [filters]);
  return (
    <GamesContext.Provider
      value={[data, games, filters, setFilters, isLoading, setGames, isError]}
    >
      {props.children}
    </GamesContext.Provider>
  );
};
