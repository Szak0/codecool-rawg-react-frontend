import React, { useContext } from "react";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import { GamesContext } from "./contexts/GamesContext";
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
}))


const SearchBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [data, games, filters, setFilters] = useContext(GamesContext);
  const minSearch = 3;
  const paginate = 1;

  const handleSearch = (event) => {
    const target = event.target.value;
    if (target.length >= minSearch) {
      setFilters({ ...filters, search: event.target.value, page: paginate });
    } else if (target.length < minSearch) {
      setFilters({ ...filters, search: "", page: paginate });
    }
  };
  return (
    <div>

      <InputBase onSubmit={(event) => event.preventDefault()}
        placeholder={"Found " + data.count + " games"}
        type="text"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        name={{ search: filters.search }}
        onChange={handleSearch}
      />

    </div>
  );
};

export default SearchBar;
