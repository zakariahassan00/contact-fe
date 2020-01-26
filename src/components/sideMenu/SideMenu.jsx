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
          <li>
            <FontAwesomeIcon icon="user" />
            Profile
          </li>
          <li>
            <FontAwesomeIcon icon="envelope" />
            Messages
          </li>
          <li>
            <FontAwesomeIcon icon="bullhorn" />
            News
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
