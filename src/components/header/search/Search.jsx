import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.scss";
import { searchPeople } from "./../../../actions";

const Search = ({ searchPeople }) => {
  return (
    <div className="search">
      <FontAwesomeIcon icon="search" />
      <input
        className="search__input"
        placeholder="Search..."
        type="search"
        onChange={e => searchPeople(e.target.value)}
      />
    </div>
  );
};

export default connect(null, { searchPeople })(Search);
