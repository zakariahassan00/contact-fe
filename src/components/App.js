import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" component={SignIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
