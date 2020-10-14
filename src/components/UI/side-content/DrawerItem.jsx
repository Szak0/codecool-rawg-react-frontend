import React from 'react'
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";

const DrawerItem = ({text, link, onclick, component}) => {

    return (
        <Link
          to={link}
          className="normalize-link"
          onClick={onclick}
        >
          <ListItem button>
            <ListItemIcon>
              {component}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
    )
}

export default DrawerItem
