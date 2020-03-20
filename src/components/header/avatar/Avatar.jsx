import React, { useState } from "react";
import { Link } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import { user } from "../userTest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./avatar.scss";
import { signOut } from "./../../../actions/index";

const RenderListItem = ({ name, icon, link, onClick }) => {
  return (
    <Link to={link}>
      <li className="avatar__list-item">
        <FontAwesomeIcon icon={icon} className="avatar__icon" />
        {name}
      </li>
    </Link>
  );
};

function Avatar() {
  const [isOpen, setIsOpen] = useState(false);

  Avatar.handleClickOutside = () => setIsOpen(false);

  return (
    <div className="avatar">
      <div className="avatar__img-container" onClick={() => setIsOpen(!isOpen)}>
        <img src={user.img} alt="profile" className="avatar__img" />
      </div>

      {isOpen && (
        <div className="avatar__popup">
          <div className="avatar__info">
            <div className="avatar__img-container">
              <img src={user.img} alt="profile" className="avatar__img" />
            </div>

            <div className="avatar__header">
              <h4>{user.name}</h4>
              <h5>{user.email}</h5>
            </div>
          </div>

          <div className="avatar__list">
            <ul className="avatar__main--inner">
              <RenderListItem
                name="Profile"
                icon="user-circle"
                link="/main/profile"
              />
              <RenderListItem
                name="Settings"
                icon="cog"
                link="/main/settings"
              />
              <RenderListItem
                onClick={() => signOut()}
                name="Logout"
                icon="sign-out-alt"
                link="/main/logout"
              />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Avatar.handleClickOutside
};

export default onClickOutside(Avatar, clickOutsideConfig);
