import React from "react";
import Button from "./../button/Button";
import { user } from "../header/userTest";

import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__cover"></div>
      </div>
      <div className="profile__main">
        <div className="profile__avatar">
          <img src={user.img} alt="profile" />
        </div>
        <div className="profile__name">
          <h1>{user.name}</h1>
        </div>
        <div className="profile__stats">
          <span>Friends : {user.friends}</span>
          <span>Followers : {user.followers}</span>
        </div>
        <div className="profile__summary">{user.summary}</div>
        <div className="profile__connect">
          <Button>Connect</Button>
          <Button>Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
