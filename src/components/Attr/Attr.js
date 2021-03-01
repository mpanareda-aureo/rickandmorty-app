import "./Attr.css";
import React from "react";
import PropTypes from "prop-types";

export const Attr = (props) => {
  return (
    <article className="Attr">
      <div className="Attr-name">{props.name}</div>
      <div className="Attr-value">{props.value}</div>
      <div className="Attr-icon">{props.icon}</div>
    </article>
  );
};

Attr.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
