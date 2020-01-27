import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "./../button/Button";
import "./sideMenu.scss";

const listElements = [
  { name: "Profile", icon: "user", link: "profile" },
  { name: "Messages", icon: "envelope", link: "messages" },
  { name: "News", icon: "bullhorn", link: "news" },
  { name: "Channels", icon: "video", link: "channels" }
];

const RenderListItem = ({ name, icon, to, selected, setPage }) => {
  return (
    <Link to={`/main/${to}`}>
      <li
        onClick={() => setPage(name)}
        className={`sidemenu__list-item ${selected &&
          "sidemenu__list-item--selected"}`}
      >
        <span>
          <FontAwesomeIcon className="sidemenu__icon" icon={icon} />
        </span>
        {name}
      </li>
    </Link>
  );
};

const SideMenu = () => {
  const [selectedPage, setSelectedPage] = useState("Profile");

  return (
    <div className="sidemenu">
      <div className="sidemenu__brand">
        <h1>Contact</h1>
      </div>

      <div className="sidemenu__elements">
        <ul className="sidemenu__list">
          {listElements.map(element => {
            return (
              <RenderListItem
                name={element.name}
                icon={element.icon}
                to={element.link}
                setPage={setSelectedPage}
                selected={element.name === selectedPage && true}
              />
            );
          })}
        </ul>

        <div className="sidemenu__channel">
          <p>Create Channel To Enjoy Group Chatting with Your Friends!</p>
          <Link to="/main/channels/new">
            <Button color="success" type="rounded">
              Create now!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
