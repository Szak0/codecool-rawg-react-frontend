import React from 'react'
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import AllTimeTop from '../UI/AllTimeTopLogo';
import PopularLogo from '../UI/PopularLogo';
import BestOfTheYearLogo from '../UI/BestOfTheYear';
import { Link } from "react-router-dom";

const LeftSideDrawer = ({
    open,
    classes,
    handleDrawerClose,
    theme,
}) => {
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                    ) : (
                            <ChevronRightIcon />
                        )}
                </IconButton>
            </div>
            <Divider />
            <List>
                <Link to="/all-time-top" className="normalize-link">
                    <ListItem button>
                        <ListItemIcon>
                            <AllTimeTop />
                        </ListItemIcon>
                        <ListItemText primary={"All time top"} />
                    </ListItem>
                </Link>
                <Link to="/best-of-the-year" className="normalize-link">
                    <ListItem button>
                        <ListItemIcon>
                            <BestOfTheYearLogo />
                        </ListItemIcon>
                        <ListItemText primary={"Best of the year"} />
                    </ListItem>
                </Link>
                <Link to="/popular-in-2019" className="normalize-link">
                    <ListItem button>
                        <ListItemIcon>
                            <PopularLogo />
                        </ListItemIcon>
                        <ListItemText primary={"Popular in 2019"} />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    )
}

export default LeftSideDrawer
