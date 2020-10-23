import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameDetails from "./components/game-detail/GameDetails";
import NavBar from "./components/UI/header-nav/NavBar";
import LeftSideDrawer from "./components/UI/side-content/LeftSideDrawer";
import { GamesProvider } from "./components/contexts/GamesContext";
import GamesList from "./components/game-cards/GamesList";
import Filters from "./components/UI/filters/ordering-filter/Filters";
import GameListByTag from "./components/game-cards/GameListByTag";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import "./App.css";
import { useStyles, darkTheme } from "./Styles";
import LoadingRing from "./components/UI/loading-ring/LoadingRing";
import ListViewDetails from "./components/game-cards/ListViewDetails";
import GamesLikeThis from "./components/game-detail/GamesLikeThis";
import SearchBar from "./components/UI/filters/search-bar/SearchBar";
import DateFilter from "./components/UI/filters/date-filter/DateFilter";
import AllFilter from "./components/UI/filters/AllFilter/AllFilter";

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Paper className={classes.paperBack}>
            <div className="app_">
              <GamesProvider>
                <CssBaseline />
                <NavBar
                  classes={classes}
                  handleDrawerOpen={handleDrawerOpen}
                  handleProfileMenuOpen={handleProfileMenuOpen}
                  open={open}
                />
                <main
                  className={clsx(classes.content, {
                    [classes.contentShift]: open,
                  })}
                >
                  <Switch>
                    <Route path={"/"} exact={true}>
                      <ListViewDetails />
                      <AllFilter />
                      <GamesList />
                      <LoadingRing />
                    </Route>
                    <Route exact path="/game/:id">
                      <GameDetails />
                      <GamesLikeThis />
                      <LoadingRing />
                    </Route>
                    <Route exact path="/tag/:tag" name="tag-page">
                      <ListViewDetails />
                      <AllFilter />
                      <GameListByTag />
                      <LoadingRing />
                    </Route>
                    <Route exact path="/all-time-top">
                      <ListViewDetails />
                      <AllFilter />
                      <GamesList />
                      <LoadingRing />
                    </Route>
                    <Route exact path="/best-of-the-year">
                      <ListViewDetails />
                      <AllFilter />
                      <GamesList />
                      <LoadingRing />
                    </Route>
                    <Route exact path="/popular-in-2019">
                      <ListViewDetails />
                      <AllFilter />
                      <GamesList />
                      <LoadingRing />
                    </Route>
                    <Route exact path="/last-30-days">
                      <ListViewDetails />
                      <AllFilter />
                      <GamesList />
                      <LoadingRing />
                    </Route>
                    <Route exact path="/this-week">
                      <ListViewDetails />
                      <AllFilter />
                      <GamesList />
                      <LoadingRing />
                    </Route>
                    <Route exact path="/next-week">
                      <ListViewDetails />
                      <AllFilter />
                      <GamesList />
                      <LoadingRing />
                    </Route>
                  </Switch>
                </main>
                <LeftSideDrawer
                  classes={classes}
                  handleDrawerClose={handleDrawerClose}
                  theme={theme}
                  open={open}
                  handleMenuClose={handleMenuClose}
                  handleMobileMenuClose={handleMobileMenuClose}
                  anchorEl={anchorEl}
                  mobileMoreAnchorEl={mobileMoreAnchorEl}
                  setOpen={setOpen}
                />
              </GamesProvider>
            </div>
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
