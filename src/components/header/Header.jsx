import React from "react";
import Search from "./search/Search";
import Notifications from "./notifications/Notifications";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__current-page">
        <h2>Messages</h2>
      </div>
      <div className="header__user">
        <div className="header__search">
          <Search />
        </div>
        <div className="header__notifications">
          <Notifications />
        </div>
      </div>
      {/* <div className="header__avatar"></div> */}
    </div>
  );
};

export default Header;
