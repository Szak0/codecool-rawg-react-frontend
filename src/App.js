import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameDetails from "./components/game-detail/GameDetails";
import NavBar from "./components/UI/header-nav/NavBar";
import LeftSideDrawer from "./components/UI/side-content/LeftSideDrawer";
import { GamesProvider } from "./components/contexts/GamesContext";
import GamesList from "./components/game-cards/GamesList";
import Filters from "./components/UI/filters/ordering-filter/Filters";
import DateFilter from "./components/UI/filters/date-filter/DateFilter";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

import clsx from "clsx";
import "./App.css";
import {useStyles, darkTheme} from "./Styles"

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
          <Paper>
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
                  <Box>
                    <Switch>
                      <Route path={"/"} exact={true}>
                        <Filters />
                        <DateFilter />
                        <GamesList />
                      </Route>
                      <Route exact path="/game/:id">
                        <GameDetails />
                      </Route>
                      <Route exact path="/all-time-top">
                        <GamesList />
                      </Route>
                      <Route exact path="/best-of-the-year">
                        <GamesList />
                      </Route>
                      <Route exact path="/popular-in-2019">
                        <GamesList />
                      </Route>
                      <Route exact path="/last-30-days">
                        <GamesList />
                      </Route>
                      <Route exact path="/this-week">
                        <GamesList />
                      </Route>
                      <Route exact path="/next-week">
                        <GamesList />
                      </Route>
                    </Switch>
                  </Box>
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
