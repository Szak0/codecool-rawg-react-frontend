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
import SearchIcon from "@material-ui/icons/Search";
import { Navbar } from "react-bootstrap";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchBar from "../filters/search-bar/SearchBar";
import { GamesContext } from "../../contexts/GamesContext";

const NavBar = ({
  open,
  classes,
  handleDrawerOpen,
  handleProfileMenuOpen,
  handleMenuClose,
  handleMobileMenuClose,
}) => {
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

  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.grow}>
      <AppBar
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
            <Link to="/" className={"normalize-link"}>
              <Navbar.Brand>RawG</Navbar.Brand>
            </Link>
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <SearchBar />
          </div>
          <div className={classes.grow} />
          <div
            className={classes.sectionDesktop}
            style={{ marginLeft: "auto" }}
          >
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
    </div>
  );
};

export default NavBar;
