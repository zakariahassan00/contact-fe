import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getUser, uploadProfilePic } from "./../../actions/index";
import Avatar from "./Avatar";
// import Button from "./../button/Button";

import "./profile.scss";

const Profile = ({ user, getUser, uploadProfilePic }) => {
  useEffect(() => {
    getUser();
  }, []);

  const renderProfile = () => {
    return (
      <div className="profile__main">
        <div className="profile__avatar">
          <Avatar
            img={user.pic}
            alt={user.name[0]}
            changePic={uploadProfilePic}
          />
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
    );
  };

  return (
    <div className="profile">
      {user ? renderProfile() : <h1>Loading....</h1>}
    </div>
  );
};

const mapStateToProps = ({ user }) => user;
export default connect(mapStateToProps, { getUser, uploadProfilePic })(Profile);
