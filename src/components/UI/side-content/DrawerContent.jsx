import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import AllTimeTop from "../logos/AllTimeTopLogo";
import PopularLogo from "../logos/PopularLogo";
import ThisWeekLogo from "../logos/ThisWeekLogo";
import NextWeekLogo from "../logos/NextWeekLogo";
import BestOfTheYearLogo from "../logos/BestOfTheYearLogo";
import { GamesContext } from "../../contexts/GamesContext";
import DrawerItem from "./DrawerItem";
import { Link, useHistory } from "react-router-dom";
import StarLogo from "../logos/StarLogo";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import {
  today,
  nextWeekDate,
  afterNextWeek,
  lastMonth,
  formatMonth,
} from "../../date-time/DrawerTimeSetting";
import LoginPic from "../logos/LoginPic";
import LogOutPic from "../logos/LogOutPic";
import Face from "../logos/Face";
import RegisterLogo from "../logos/RegisterLogo";

const DrawerContent = ({ setOpen }) => {
  const [user, setUser] = useContext(AuthContext);
  
  const history = useHistory();

  const routeChangeRegistration = () => {
    history.push(`/register`);
  };

  const routeChangeLogin = () => {
    history.push(`/login`);
  };

  const handleProfile = () => {
    history.push(`/profile`);
  };

  const [
    data,
    games,
    filters,
    setFilters,
    isLoading,
    setGames,
    isError,
    setPathSuffix,
  ] = useContext(GamesContext);


  const handleLogOut = async (event) => {
    event.preventDefault();
    const baseURL = `${process.env.REACT_APP_BACKEND_AUTH}/logout`;
    axios
      .get(
        baseURL,
        {withCredentials: true},
      )
      .then((res) => {
        localStorage.clear();
        setUser(null)
        history.push(`/login`);
      })
      .catch((err) => { 
        if (err.response) {
          //setError(true);
        } else if (err.request) {
          //setAuthServerDown(true);
        } else {
          // anything else
        }
      });
  };



  const handleAllTimeTop = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `1920-01-01,${today.getFullYear()}-12-31`,
    });
    normalizeFilter(setPathSuffix, setGames, setOpen);
  };
  const handlePopularLastYear = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `${today.getFullYear() - 1}-01-01,${today.getFullYear()}-01-01`,
    });
    normalizeFilter(setPathSuffix, setGames, setOpen);
  };
  const handleBestOfTheYear = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `${today.getFullYear()}-01-01,${today.getFullYear()}-12-31`,
    });
    normalizeFilter(setPathSuffix, setGames, setOpen);
  };
  const handleNextWeek = () => {
    const settings = {
      page: 1,
      ordering: "-added",
      dates: `${nextWeekDate.getFullYear()}-${formatMonth(
        nextWeekDate.getMonth() + 1
      )}-${formatMonth(nextWeekDate.getDate())},${afterNextWeek.getFullYear()}-${formatMonth(
        afterNextWeek.getMonth() + 1
      )}-${formatMonth(afterNextWeek.getDate())}`,
    }
    setFilters(settings);
    normalizeFilter(setPathSuffix, setGames, setOpen);
  };
  const handleThisWeek = () => {
    const settings = {
      page: 1,
      ordering: "-added",
      dates: `${today.getFullYear()}-${formatMonth(
        today.getMonth() + 1
      )}-${formatMonth(today.getDate())},${nextWeekDate.getFullYear()}-${formatMonth(
        nextWeekDate.getMonth() + 1
      )}-${formatMonth(nextWeekDate.getDate())}`,
    }
    setFilters(settings);
    normalizeFilter(setPathSuffix, setGames, setOpen);
  };
  const handleLast30Days = () => {
    const settings = {
      page: 1,
      ordering: "-added",
      dates: `${lastMonth.getFullYear()}-${formatMonth(
        lastMonth.getMonth() + 1
      )}-${formatMonth(lastMonth.getDate())},${today.getFullYear()}-${formatMonth(
        today.getMonth() + 1
      )}-${formatMonth(today.getDate())}`,
    }
    console.log(settings)
    setFilters(settings);
    normalizeFilter(setPathSuffix, setGames, setOpen);

  };
  const handleAll = () => {
    setFilters({
      page: 1,
      ordering: "-added",
    });
    normalizeFilter(setPathSuffix, setGames, setOpen);
  };

  return (
    <div>
      <List>
        <Link to="/" className="bold-drawer-item">
          <ListItem button>
            <ListItemText primary={"News and trending"} />
          </ListItem>
        </Link>
        <Link to="/all-games" className="bold-drawer-item" onClick={handleAll}>
          <ListItem button>
            <ListItemText primary={"All Games"} />
          </ListItem>
        </Link>

        <ListItem>
          <ListItemText primary={"Tops"} />
        </ListItem>
        <DrawerItem
          text={"All time top"}
          onclick={handleAllTimeTop}
          link={"/all-time-top"}
          component={<AllTimeTop />}
        />
        <DrawerItem
          text={"Best of the year"}
          onclick={handleBestOfTheYear}
          link={"/best-of-the-year"}
          component={<BestOfTheYearLogo />}
        />
        <DrawerItem
          text={"Popular in 2019"}
          onclick={handlePopularLastYear}
          link={"/popular-in-2019"}
          component={<PopularLogo />}
        />
        <ListItem>
          <ListItemText primary={"New Releases"} />
        </ListItem>
        <DrawerItem
          text={"Last 30 days"}
          onclick={handleLast30Days}
          link={"/last-30-days"}
          component={<StarLogo />}
        />
        <DrawerItem
          text={"This Week"}
          onclick={handleThisWeek}
          link={"/this-week"}
          component={<ThisWeekLogo />}
        />
        <DrawerItem
          text={"Next Week"}
          onclick={handleNextWeek}
          link={"/next-week"}
          component={<NextWeekLogo />}
        />
        <ListItem>
          <ListItemText primary={"Account"} />
        </ListItem>
        { user ? (
          <div>
            <DrawerItem text={"My Profile"} onclick={handleProfile} component={<Face/>} />
            <DrawerItem text={"Log out"} onclick={handleLogOut} component={<LogOutPic/>}/>
          </div>
        ) : (
          <div>
            <DrawerItem text={"Login"} onclick={routeChangeLogin} component={<LoginPic/>}/>
            <DrawerItem
              text={"Registration"}
              onclick={routeChangeRegistration}
              component={<RegisterLogo/>}
            />
          </div>
        )}
      </List>
    </div>
  );
};

export default DrawerContent;


function normalizeFilter(setPathSuffix, setGames, setOpen) {
  setPathSuffix("/games?");
  setGames([]);
  setOpen(false);
}

