import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./../button/Button";
import "./sideMenu.scss";

const SideMenu = () => {
  return (
    <div className="sidemenu">
      <div className="sidemenu__brand">
        <h1>Contact</h1>
      </div>
      <div className="sidemenu__elements">
        <ul className="sidemenu__list">
          <li className="sidemenu__list-item">
            <span>
              <FontAwesomeIcon className="sidemenu__icon" icon="user" />
            </span>
            Profile
          </li>
          <li className="sidemenu__list-item">
            <span>
              <FontAwesomeIcon className="sidemenu__icon" icon="envelope" />
            </span>
            Messages
          </li>
          <li className="sidemenu__list-item">
            <span>
              <FontAwesomeIcon className="sidemenu__icon" icon="bullhorn" />
            </span>
            News
          </li>
          <li className="sidemenu__list-item">
            <span>
              <FontAwesomeIcon className="sidemenu__icon" icon="video" />
            </span>
            Channels
          </li>
        </ul>
        <div className="sidemenu__channel">
          <p>Create Channel To Enjoy Group Chatting with Your Friends!</p>
          <Button color="success" type="rounded">
            Create now!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
