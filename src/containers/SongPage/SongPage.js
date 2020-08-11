import React, { useEffect, useState } from "react";
import classes from "./SongPage.module.css";
import songs from "../../songs";
import ListItem from "../../components/ListItem/ListItem";
import ReactPlayer from "react-player";

const SongPage = (props) => {
  const [song, setSong] = useState({});
  useEffect(() => {
    setSong(songs[props.match.params.id]);
    return () => {};
  }, [props.match.params.id]);
  if (!song) return null;
  return (
    <div className={classes.root}>
      <div className={classes.videoSection}>
        <ReactPlayer url={song.link} />
        <h1>{song.name}</h1>
        <p>{song.views} views</p>
        <div className={classes.icons}>
          <button onClick={() => setSong({ ...song, likes: +song.likes + 1 })}>
            <i className="fas fa-thumbs-up"></i>
            <span>{song.likes}</span>
          </button>
          <button
            onClick={() => setSong({ ...song, dislikes: +song.dislikes + 1 })}
          >
            <i className="fas fa-thumbs-down"></i>
            <span>{song.dislikes}</span>
          </button>
        </div>
      </div>
      <div>
        <ul>
          {song.relatedPlaylists &&
            song.relatedPlaylists.map((relSong, index) => {
              return <ListItem key={index} song={relSong} isSmall={true} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default SongPage;
