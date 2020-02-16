import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "./../../actions/index";
// import Button from "./../button/Button";

import "./profile.scss";

const Profile = ({ user, getUser }) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile">
      {user ? (
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
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => user;
export default connect(mapStateToProps, { getUser })(Profile);
