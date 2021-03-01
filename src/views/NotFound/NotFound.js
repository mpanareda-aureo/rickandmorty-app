import "./NotFound.css";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="NotFound">
    <div>
      <h2>404 - Rick Not Found!</h2>
      <p>Maybe look on another dimension</p>
      <Link to="/">Go Home</Link>
    </div>
  </div>
);

export default NotFound;
