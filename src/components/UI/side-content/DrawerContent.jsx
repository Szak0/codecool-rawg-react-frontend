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
import {
  today,
  nextWeekDate,
  afterNextWeek,
  lastMonth,
  formatMonth,
} from "../../date-time/DrawerTimeSetting";

const DrawerContent = ({ setOpen }) => {

  const history = useHistory();

  const routeChangeRegistration = () =>{ 
    let path = `/register`; 
    history.push(path);
  }

  const routeChangeLogin = () =>{ 
    let path = `/login`; 
    history.push(path);
  }

  const routeChangeMyProfile = () =>{ 
    let path = `/profile/1`; 
    history.push(path);
  }



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
  const handleAllTimeTop = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `1920-01-01,${today.getFullYear()}-12-31`,
    });
    setPathSuffix("/games?");
    setGames([]);
    setOpen(false);
  };
  const handlePopularLastYear = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `${today.getFullYear() - 1}-01-01,${today.getFullYear()}-01-01`,
    });
    setPathSuffix("/games?");
    setGames([]);
    setOpen(false);
  };
  const handleBestOfTheYear = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `${today.getFullYear()}-01-01,${today.getFullYear()}-12-31`,
    });
    setPathSuffix("/games?");
    setGames([]);
    setOpen(false);
  };
  const handleNextWeek = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: `${nextWeekDate.getFullYear()}-${
        nextWeekDate.getMonth() + 1
      }-${nextWeekDate.getDate()},${afterNextWeek.getFullYear()}-${
        afterNextWeek.getMonth() + 1
      }-${afterNextWeek.getDate()}`,
    });
    console.log(
      `${nextWeekDate.getFullYear()}-${
        nextWeekDate.getMonth() + 1
      }-${nextWeekDate.getDate()},${afterNextWeek.getFullYear()}-${
        afterNextWeek.getMonth() + 1
      }-${afterNextWeek.getDate()}`
    );
    setPathSuffix("/games?");
    setGames([]);
    setOpen(false);
  };
  const handleThisWeek = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: `${today.getFullYear()}-${
        today.getMonth() + 1
      }-${today.getDate()},${nextWeekDate.getFullYear()}-${
        nextWeekDate.getMonth() + 1
      }-${nextWeekDate.getDate()}`,
    });
    setPathSuffix("/games?");
    setGames([]);
    setOpen(false);
  };
  const handleLast30Days = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: `${lastMonth.getFullYear()}-${formatMonth(
        lastMonth.getMonth() + 1
      )}-${lastMonth.getDate()},${today.getFullYear()}-${
        today.getMonth() + 1
      }-${today.getDate()}`,
    });
    setPathSuffix("/games?");
    setGames([]);
    setOpen(false);
  };
  const handleAll = () => {
    setFilters({
      page: 1,
      ordering: "-added",
    });
    setPathSuffix("/games?");
    setGames([]);
    setOpen(false);
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
          text={"Registration"}
          onclick={routeChangeRegistration}
        />
        <DrawerItem
          text={"Login"}
          onclick={routeChangeLogin}
        />
        <DrawerItem
          text={"My Profile"}
          onclick={routeChangeMyProfile}
        />
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
      </List>
    </div>
  );
};

export default DrawerContent;
