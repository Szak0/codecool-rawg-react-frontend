import React, { useContext } from 'react'
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AllTimeTop from '../UI/AllTimeTopLogo';
import PopularLogo from '../UI/PopularLogo';
import BestOfTheYearLogo from "../UI/BestOfTheYearLogo";
import { Link } from "react-router-dom";
import { GamesContext } from "../contexts/GamesContext"

const DrawerContent = () => {
    const [data, games, filters, setFilters] = useContext(GamesContext);

    const handleAllTimeTop = () => {
        setFilters({
            page: 1,
            ordering: "-rating",
            dates: "1920-01-01,2020-01-01"
        });
    };
    const handlePopularLastYear = () => {
        setFilters({
            page: 1,
            ordering: "-rating",
            dates: "2019-01-01,2020-01-01"
        });
    };
    const handleBestOfTheYear = () => {
        setFilters({
            page: 1,
            ordering: "-rating",
            dates: "2020-01-01,2020-12-31"
        });
    };
    return (
        <List>
            <Link to="/all-time-top" className="normalize-link" onClick={handleAllTimeTop}>
                <ListItem button>
                    <ListItemIcon>
                        <AllTimeTop />
                    </ListItemIcon>
                    <ListItemText primary={"All time top"} />
                </ListItem>
            </Link>
            <Link to="/best-of-the-year" className="normalize-link" onClick={handleBestOfTheYear}>
                <ListItem button>
                    <ListItemIcon>
                        <BestOfTheYearLogo />
                    </ListItemIcon>
                    <ListItemText primary={"Best of the year"} />
                </ListItem>
            </Link>
            <Link to="/popular-in-2019" className="normalize-link" onClick={handlePopularLastYear}>
                <ListItem button>
                    <ListItemIcon>
                        <PopularLogo />
                    </ListItemIcon>
                    <ListItemText primary={"Popular in 2019"} />
                </ListItem>
            </Link>
        </List>
    )
}

export default DrawerContent
