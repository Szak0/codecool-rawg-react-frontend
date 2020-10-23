import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { GamesContext } from "../../../contexts/GamesContext";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const DateFilter = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [data, games, filters, setFilters, isLoading, setGames] = useContext(
    GamesContext
  );
  const classes = useStyles();

  const handleStartDateFilter = (event) => {
    setDateFrom(event.target.value);
  };

  const handleEndDateFilter = (event) => {
    console.log(event);
    event.persist();
    let dates = `${dateFrom},${event.target.value}`;
    if (dates[0] === ",") {
      dates = "";
    }
    setFilters({
      ...filters,
      page: 1,
      dates: dates,
    });
    setGames([]);
  };
  return (
    <div className={"date-form-filter"}>
      <form noValidate>
        <TextField
          id="date"
          label="From"
          type="date"
          defaultValue="yyyy-MM-dd"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleStartDateFilter}
        />
      </form>
      <form noValidate>
        <TextField
          id="date2"
          label="To"
          type="date"
          defaultValue="yyyy-mm-dd"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleEndDateFilter}
        />
      </form>
    </div>
  );
};

export default DateFilter;
