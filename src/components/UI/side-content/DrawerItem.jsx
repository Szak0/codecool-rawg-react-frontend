import React, { useContext } from 'react'
import AllTimeTop from "../logos/AllTimeTopLogo";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import { GamesContext } from "../../contexts/GamesContext";

const DrawerItem = ({text, link, onClick}) => {

    return (
        <Link
          to={link}
          className="normalize-link"
          onClick={onClick}
        >
          <ListItem button>
            <ListItemIcon>
              <AllTimeTop />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
    )
}

export default DrawerItem
