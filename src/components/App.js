import React from "react";
import { Route } from "react-router-dom";
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
import NotFound from "./common/NotFound";

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
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/main" component={Dashboard} />
      <Route path="/" component={NotFound} />
    </div>
  );
}

export default App;
