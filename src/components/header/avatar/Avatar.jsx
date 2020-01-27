import React from "react";
import testImage from "../../../assests/img/profile-img.jpg";
import "./avatar.scss";

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={testImage} alt="profile" className="avatar__img" />
    </div>
  );
};

export default Avatar;
