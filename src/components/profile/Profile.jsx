import React from "react";
import Button from "./../button/Button";
import { user } from "../header/userTest";

import "./profile.scss";

const Profile = props => {
  return (
    <div className="profile">
      <div className="profile__main">
        <div className="profile__avatar">
          <img src={user.img} alt="profile" />
        </div>
        <div className="profile__name">
          <h1>{user.name}</h1>
        </div>
        <div className="profile__stats">
          Friends :{" "}
          <span className="profile__stats--friends">{user.friends}</span>
          Followers :{" "}
          <span className="profile__stats--followers">{user.followers}</span>
        </div>
        <div className="profile__summary">{user.summary}</div>
        <div className="profile__connect">
          <Button type="rounded">Connect</Button>
          <Button type="rounded">Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
