import React from "react";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faBullhorn,
  faVideo,
  faSearch,
  faBell,
  faUserCircle,
  faSignOutAlt,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./dashboard/Dashboard";
import "./App.scss";
import LandingPage from "./landingPage/LandingPage";

library.add(
  faUser,
  faEnvelope,
  faBullhorn,
  faVideo,
  faSearch,
  faBell,
  faUserCircle,
  faSignOutAlt,
  faCog
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/main" component={Dashboard} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
