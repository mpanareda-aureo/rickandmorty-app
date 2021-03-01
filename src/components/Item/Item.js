import "./Item.css";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Attr } from "../Attr";

export const Item = (props) => {
  const [favBtnTxt, setFavBtnTxt] = useState("Favourite character");

  if (props.item.name) {
    return (
      <section className="Item">
        <img src={props.item.image} alt={props.item.name} />
        <div>
          <h2>{props.item.name}</h2>
          <div className="AttrGroup">
            <Attr name="Species" value={props.item.species} />
            <Attr
              name="Type"
              value={props.item.type ? props.item.type : "- no type -"}
            />
            <Attr name="Gender" value={props.item.gender} />
          </div>
          <div className="AttrGroup">
            <Attr name="Origin" value={props.item.origin.name} />
            <Attr name="Location" value={props.item.location.name} />
            <Attr name="Status" value={props.item.status} />
          </div>
          <div className="buttons">
            {props.fav ? (
              <button
                className="remove"
                onClick={props.onUnsetFav}
                onMouseOver={() => setFavBtnTxt("Remove from Favourites")}
                onMouseOut={() => setFavBtnTxt("Favourite character")}
              >
                <FontAwesomeIcon icon={faHeart} /> {favBtnTxt}
              </button>
            ) : (
              <button className="add" onClick={props.onSetFav}>
                Add to Favourites
              </button>
            )}
          </div>
          <div className="close">
            <FontAwesomeIcon icon={faTimes} size="2x" onClick={props.onClose} />
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};
