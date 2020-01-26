import React from "react";
import { Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faBullhorn
} from "@fortawesome/free-solid-svg-icons";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./dashboard/Dashboard";
import "./App.scss";

library.add(faUser, faEnvelope, faBullhorn);

function App() {
  return (
    <div className="App">
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/main" component={Dashboard} />
    </div>
  );
}

export default App;
