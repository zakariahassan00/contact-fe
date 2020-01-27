import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <FontAwesomeIcon icon="search" />
      <input className="search__input" placeholder="Search..." type="text" />
    </div>
  );
};

export default Search;
