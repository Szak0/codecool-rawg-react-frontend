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
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GamesProvider>
          <CssBaseline />
          <Header />
          <div className="App">
            
            <Switch>
              <Route path={"/"} exact component={GamesList}>
                <SearchBar />
              <Filters />
              <DateFilter />
                <GamesList />
                <Pagination />

              </Route>
              <Route
              exact
              path="/game/:id">
              
                <GameDetails />
                </Route>
                
            </Switch>

          </div>
        </GamesProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
