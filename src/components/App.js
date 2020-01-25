import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./dashboard/Dashboard";
import "./App.scss";

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
