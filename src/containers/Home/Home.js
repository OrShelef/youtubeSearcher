import React, { useState } from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import songs from "../../songs";
import ListItem from "../../components/ListItem/ListItem";
const Home = () => {
  const [listOfSongs, setlistOfSongs] = useState([]);
  const onSearch = (event, searchText) => {
    event.preventDefault();
    setlistOfSongs(
      songs.filter((song) =>
        song.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className={classes.root}>
      <nav>
        <Link to="/">Youtube Search</Link>
      </nav>
      <div className={classes.container}>
        <SearchBar onSearch={onSearch} />
        <button className={classes.filter_button}>
          <i className="fas fa-filter"></i>
          <span>Filter</span>
        </button>
        <hr style={{ width: "100%" }} />
        {listOfSongs.length > 0 &&
          listOfSongs.map((song, index) => {
            return <ListItem song={song} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Home;
