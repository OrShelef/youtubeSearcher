import React, { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <form
      onSubmit={(e) => props.onSearch(e, searchText)}
      className={classes.root}
    >
      <input
        required
        className={classes.input}
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className={classes.button}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
