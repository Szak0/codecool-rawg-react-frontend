import React, { useContext } from "react";
import { GamesContext } from "../contexts/GamesContext";

const ListViewDetails = () => {
  const [data] = useContext(GamesContext);

  function numberFormat(n) {
    return String(n).replace(/(.)(?=(\d{3})+$)/g, "$1,");
  }

  return (
    <div className={"list-title"}>
      <h2>About {numberFormat(data.count)} results</h2>
      <h1>{data.seo_title}</h1>
    </div>
  );
};

export default ListViewDetails;
