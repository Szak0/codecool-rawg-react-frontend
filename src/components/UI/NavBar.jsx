import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchBar from "../SearchBar";
import SearchIcon from "@material-ui/icons/Search";
import { Navbar } from "react-bootstrap";
import { GamesContext } from "../contexts/GamesContext";

const NavBar = ({ open, classes, handleDrawerOpen, handleProfileMenuOpen }) => {
  const [data, games, filters, setFilters] = useContext(GamesContext);
  const handleMainRoute = () => {
    setFilters({});
  };
  const menuId = "primary-search-account-menu";
  return (
    <AppBar
      style={{ background: "#000" }}
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

        <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/" onClick={handleMainRoute} className={"normalize-link"}>
            <Navbar.Brand>RawG</Navbar.Brand>
          </Link>
        </Typography>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <SearchBar />
        </div>
        <div style={{ marginLeft: "auto" }}>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
