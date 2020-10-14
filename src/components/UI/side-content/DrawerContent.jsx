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

  const handleAllTimeTop = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: "1920-01-01,2020-01-01",
    });
    setGames([]);
  };
  const handlePopularLastYear = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: "2019-01-01,2020-01-01",
    });
    setGames([]);
  };
  const handleBestOfTheYear = () => {
    setFilters({
      page: 1,
      ordering: "-rating",
      dates: "2020-01-01,2020-12-31",
    });
    setGames([]);
  };
  const handleNextWeek = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: "2020-10-05,2020-10-11",
    });
    setGames([]);
  };
  const handleThisWeek = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: "2020-09-28,2020-10-04",
    });
  };
  const handleLast30Days = () => {
    setFilters({
      page: 1,
      ordering: "-added",
      dates: "2020-09-02,2020-10-02",
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
        <Divider />
        <ListItem>
          <ListItemText primary={"New Releases"} />
        </ListItem>
        <DrawerItem 
          text={"Last 30 days"} 
          onclick={handleLast30Days} 
          link={"/last-30-days"} 
          component={ <StarLogo />}
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
          component={  <NextWeekLogo /> }
        />
        <Divider />
      </List>
    </div>
  );
};

export default DrawerContent;
