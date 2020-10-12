import React, { useContext } from "react";
import { GamesContext } from "./contexts/GamesContext";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginTop: theme.spacing(5),
    float: "right",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

const Filters = () => {
  const classes = useStyles();
  const [data, games, filters, setFilters, isLoading, setGames] = useContext(
    GamesContext
  );

  const handleChange = (event) => {
    setFilters({
      ...filters,
      page: 1,
      ordering: event.target.value,
    });
    setGames([]);
  };

  return (
    <div className={"search-form-controll"}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="order-native-simple">Order by</InputLabel>
        <Select
          native
          value={filters.order}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "order-native-simple",
          }}
        >
          <option aria-label="None" value=""></option>
          <option value={"-name"}>Name</option>
          <option value={"-released"}>Release</option>
          <option value={"-added"}>Date added</option>
          <option value={"-created"}>Created</option>
          <option value={"-rating"}>Rating</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
