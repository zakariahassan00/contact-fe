import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "./../button/Button";
import "./sideMenu.scss";

const RenderListItem = ({ name, icon, to = "/" }) => {
  return (
    <Link to={`/main/${to}`}>
      <li className="sidemenu__list-item">
        <span>
          <FontAwesomeIcon className="sidemenu__icon" icon={icon} />
        </span>
        {name}
      </li>
    </Link>
  );
};

const SideMenu = () => {
  return (
    <div className="sidemenu">
      <div className="sidemenu__brand">
        <h1>Contact</h1>
      </div>

      <div className="sidemenu__elements">
        <ul className="sidemenu__list">
          <RenderListItem name="Profile" icon="user" to="profile" />
          <RenderListItem name="Messages" icon="envelope" to="messages" />
          <RenderListItem name="News" icon="bullhorn" to="news" />
          <RenderListItem name="Channels" icon="video" to="channels" />
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
