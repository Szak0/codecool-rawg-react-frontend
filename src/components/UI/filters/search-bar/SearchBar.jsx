import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GamesContext } from "../../../contexts/GamesContext";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
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
}));

const SearchBar = () => {
  const classes = useStyles();
  const [data, games, filters, setFilters, isLoading, setGames] = useContext(
    GamesContext
  );
  const minSearch = 3;
  const paginate = 1;

  const handleSearch = async (event) => {
    const target = event.target.value;
    console.log(target);
    if (target.length >= minSearch) {
      setGames([]);
      setFilters({ search: event.target.value, page: paginate, ordering: "-rating" });
    }
    else {
      setGames([]);
      setFilters({});
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
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
