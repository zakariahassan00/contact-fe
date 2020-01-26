import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sideMenu.scss";

const SideMenu = () => {
  return (
    <div className="sidemenu">
      <div className="sidemenu__brand">
        <h1>Contact</h1>
      </div>
      <div className="sidemenu__elements">
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
