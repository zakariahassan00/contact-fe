import React from "react";
import "./dashboard.scss";
import SideMenu from "../sideMenu/SideMenu";
import Header from "./../header/Header";
import Profile from "./../profile/Profile";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__sidemenu">
        <SideMenu />
      </div>
      <div className="dashboard__main">
        <div className="dashboard__header">
          <Header />
        </div>
        <div className="dashboard__content">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
