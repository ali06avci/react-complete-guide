import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // space after the "card"

  return <div className={classes}>{props.children}</div>;
};

export default Card;
