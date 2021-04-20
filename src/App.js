import React, { useState, useMemo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameDetails from "./components/game-detail/GameDetails";
import NavBar from "./components/UI/header-nav/NavBar";
import LeftSideDrawer from "./components/UI/side-content/LeftSideDrawer";
import { GamesProvider } from "./components/contexts/GamesContext";
import GamesList from "./components/game-cards/GamesList";
import GameListByTag from "./components/game-cards/GameListByTag";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import "./App.css";
import { useStyles, darkTheme } from "./Styles";
import LoadingRing from "./components/UI/loading-ring/LoadingRing";
import ListViewDetails from "./components/game-cards/ListViewDetails";
import GamesLikeThis from "./components/game-detail/GamesLikeThis";
import AllFilter from "./components/UI/filters/AllFilter/AllFilter";
import NewsAndTranding from "./pages/NewsAndTranding";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/ProfilePage";
import { AuthProvider } from "./components/contexts/AuthContext";



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
              <AuthProvider>
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
                        <div className={"page-title"}>
                          <h1>News and tranding</h1>
                          <span>Based on player counts and release date</span>
                        </div>
                        <ListViewDetails />
                        <AllFilter />
                        <NewsAndTranding />
                        <LoadingRing />
                      </Route>
                      <Route path="/register">
                        <Register />
                      </Route>
                      <Route path="/login">
                        <Login />
                      </Route>
                      <Route path="/profile">
                        <Profile />
                      </Route>
                      <Route path={"/all-games"}>
                        <ListViewDetails />
                        <AllFilter />
                        <GamesList />
                        <LoadingRing />
                      </Route>
                      <Route exact path="/game/:id">
                        <GameDetails />
                        <LoadingRing />
                      </Route>
                      <Route exact path="/tag/:tag" name="tag-page">
                        <ListViewDetails />
                        <AllFilter />
                        <GameListByTag />
                        <LoadingRing />
                      </Route>
                      <Route exact path="/all-time-top">
                        <div className={"page-title"}>
                          <h1>All time top</h1>
                        </div>
                        <ListViewDetails />
                        <AllFilter />
                        <GamesList />
                        <LoadingRing />
                      </Route>
                      <Route exact path="/best-of-the-year">
                        <div className={"page-title"}>
                          <h1>Best of the year</h1>
                        </div>
                        <ListViewDetails />
                        <AllFilter />
                        <GamesList />
                        <LoadingRing />
                      </Route>
                      <Route exact path="/popular-in-2019">
                        <div className={"page-title"}>
                          <h1>Popular in 2019</h1>
                        </div>
                        <ListViewDetails />
                        <AllFilter />
                        <GamesList />
                        <LoadingRing />
                      </Route>
                      <Route exact path="/last-30-days">
                        <div className={"page-title"}>
                          <h1>Released: Last 30 days</h1>
                        </div>
                        <ListViewDetails />
                        <AllFilter />
                        <GamesList />
                        <LoadingRing />
                      </Route>
                      <Route exact path="/this-week">
                        <div className={"page-title"}>
                          <h1>Released: This week</h1>
                        </div>
                        <ListViewDetails />
                        <AllFilter />
                        <GamesList />
                        <LoadingRing />
                      </Route>
                      <Route exact path="/next-week">
                        <div className={"page-title"}>
                          <h1>Release: Next week</h1>
                        </div>
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
              </AuthProvider>
            </div>
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
