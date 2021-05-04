import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/404-image.png";

const NotFoundContainer = (props: any) => {
  return (
    <div>
      <Link to="/">
        <img src={image} alt="404" />
      </Link>
    </div>
  );
};

export default NotFoundContainer;
