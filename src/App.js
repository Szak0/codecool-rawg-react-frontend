import React, { useState } from "react";
import "./App.css";
import { GamesProvider } from "./components/contexts/GamesContext";
import GamesList from "./components/game-cards/GamesList";
import Filters from "./components/UI/filters/ordering-filter/Filters";
import DateFilter from "./components/UI/filters/date-filter/DateFilter";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameDetails from "./components/game-detail/GameDetails";
import NavBar from "./components/UI/header-nav/NavBar";
import LeftSideDrawer from "./components/UI/side-content/LeftSideDrawer";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    textTransform: "uppercase",
    position: "relative",
    fontSize: "18px",
    fontWeight: 900,
    lineHeight: "1",
    letterSpacing: "5px",
    color: "white",
    fontFamily: "BlinkMacSystemFont",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "30%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: +drawerWidth,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
                  <Box my={1}>
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
