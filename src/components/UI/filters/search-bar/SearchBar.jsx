import React, { useContext } from "react";
import { GamesContext } from "../../../contexts/GamesContext";
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from './search-bar-styling'


const SearchBar = () => {
  
  const classes = useStyles();
  const [data, games, filters, setFilters, isLoading, setGames] = useContext(
    GamesContext
  );

  const paginate = 1;
  const handleSearch = async (event) => {
    if (event.key === 'Enter') {
      setGames([]);
      setFilters({ search: event.target.value, page: paginate });
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}></div>
      <InputBase
        onSubmit={(event) => event.preventDefault()}
        placeholder={"Search..."}
        type="text"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        name={filters.search}
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
