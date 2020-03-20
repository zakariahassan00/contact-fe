import React from "react";
import notFound from "../../assests/img/404.svg";
import "./notFound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__innerContainer">
        <img src={notFound} alt="Not Found" />
        <h1>Sorry Not Found!</h1>
      </div>
    </div>
  );
};

export default NotFound;
