import React from "react";
import classes from "./ListItem.module.css";
import { Link } from "react-router-dom";
const ListItem = (props) => {
  return (
    <Link
      className={`${classes.root} ${props.isSmall && classes.sm}`}
      to={`/songs/${props.song.id}`}
    >
      <img src="https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612" />
      <div>
        <h1>{props.song.name}</h1>
        <div className={classes.description}>
          <p>{props.song.views} views</p>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
