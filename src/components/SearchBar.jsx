import React, { useContext } from "react";
import { GamesContext } from "./contexts/GamesContext";

const SearchBar = () => {
  const [games, filters, setFilters] = useContext(GamesContext);
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
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          name={{ search: filters.search }}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;
