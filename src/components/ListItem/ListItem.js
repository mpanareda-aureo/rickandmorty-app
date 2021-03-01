import "./ListItem.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const ListItem = (props) => {
  const fav = props.fav ? (
    <div className="fav">
      <FontAwesomeIcon icon={faHeart} />
    </div>
  ) : (
    ""
  );
  return (
    <article className="ListItem" onClick={props.onClick}>
      <img src={props.character.image} alt={props.character.name} />
      <div className="ListItem-label">
        <h2>{props.character.name}</h2>
        <div>
          {props.character.status} - {props.character.species}
        </div>
      </div>
      {fav}
    </article>
  );
};

ListItem.propTypes = {
  fav: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
};
