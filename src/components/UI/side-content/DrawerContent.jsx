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
import Divider from "@material-ui/core/Divider";
import DrawerItem from "./DrawerItem"

import StarLogo from "../logos/StarLogo";

const DrawerContent = () => {
  const [data, games, filters, setFilters, isLoading, setGames] = useContext(
    GamesContext
  );
  
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  const nextWeekDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
  const afterNextWeek = new Date(nextWeekDate.getFullYear(), nextWeekDate.getMonth(), nextWeekDate.getDate()+7);
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

  const formatMonth = (month) => {
    if (month < 10) {
      return 0 + `${month}`
    }
  }
  const handleAllTimeTop = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `1920-01-01,${currentYear}-12-31`,
    });
    setGames([]);
  };
  const handlePopularLastYear = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `${currentYear - 1}-01-01,${currentYear}-01-01`,
    });
    setGames([]);
  };
  const handleBestOfTheYear = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: `${currentYear}-01-01,${currentYear}-12-31`,
    });
    setGames([]);
  };
  const handleNextWeek = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: `${nextWeekDate.getFullYear()}-${nextWeekDate.getMonth() + 1}-${nextWeekDate.getDate()},${afterNextWeek.getFullYear()}-${afterNextWeek.getMonth() + 1}-${afterNextWeek.getDate()}`,
    });
    setGames([]);
  };
  const handleThisWeek = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: `${currentYear}-${currentMonth}-${currentDay},${nextWeekDate.getFullYear()}-${nextWeekDate.getMonth() + 1}-${nextWeekDate.getDate()}`,
    });
    setGames([]);
  };
  const handleLast30Days = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: `${lastMonth.getFullYear()}-${formatMonth(lastMonth.getMonth() + 1)}-${lastMonth.getDate()},${currentYear}-${currentMonth}-${currentDay}`,
    });
    setGames([]);
  };
  return (
    <div>
      <List>
        <ListItem button>
          <ListItemText primary={"Home"} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={"Tops"} />
        </ListItem>
        <DrawerItem 
          text={"All time top"} 
          onclick={handleAllTimeTop} 
          link={"/all-time-top"} 
          component={ <AllTimeTop /> } 
        />
        <DrawerItem 
          text={"Best of the year"} 
          onclick={handleBestOfTheYear} 
          link={"/best-of-the-year"} 
          component={ <BestOfTheYearLogo /> }
        />
        <DrawerItem 
          text={"Popular in 2019"} 
          onclick={handlePopularLastYear} 
          link={"/popular-in-2019"} 
          component={ <PopularLogo /> }
        />
        <Divider />
        <ListItem>
          <ListItemText primary={"New Releases"} />
        </ListItem>
        <DrawerItem 
          text={"Last 30 days"} 
          onclick={handleLast30Days} 
          link={"/last-30-days"} 
          component={ <StarLogo /> }
        />
        <DrawerItem 
          text={"This Week"} 
          onclick={handleThisWeek} 
          link={"/this-week"} 
          component={ <ThisWeekLogo /> }
        />
        <DrawerItem 
          text={"Next Week"} 
          onclick={handleNextWeek} 
          link={"/next-week"} 
          component={ <NextWeekLogo /> }
        />
        <Divider />
      </List>
    </div>
  );
};

export default DrawerContent;
