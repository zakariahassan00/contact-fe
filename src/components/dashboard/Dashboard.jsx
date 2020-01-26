import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__sidemenu"></div>
      {/* SideMenu */}
      <div className="dashboard__main">
        <div className="dashboard__header"></div>
        {/* header */}
        <div className="dashboard__content"></div>
        {/* main */}
      </div>
    </div>
  );
};

export default Dashboard;
