import React from "react";
import "./dashboard.scss";
import SideMenu from "../sideMenu/SideMenu";
import Header from "./../header/Header";
import Profile from "./../profile/Profile";
import { Route, Switch } from "react-router-dom";

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
          <Switch>
            <Route path="/main/profile" component={Profile} />
            <Route path="/main" component={Profile} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
