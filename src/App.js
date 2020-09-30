import React from "react";
import "./App.css";
import { GamesProvider } from "./components/contexts/GamesContext";
import GamesList from "./components/GamesList";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import DateFilter from "./components/DateFilter";
import Pagination from "./components/Pagination";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GamesProvider>
          <CssBaseline />
          <Header />
          <div className="App">
            <SearchBar />
            <Filters />
            <DateFilter />
            <Switch>
              <Route path={"/"} exact={true} component={GamesList}>
                <GamesList />
              </Route>
              <Route path="/game/:id">
                <GamesList />
              </Route>
            </Switch>

            <Pagination />
          </div>
        </GamesProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
