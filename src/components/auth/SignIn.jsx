import React from "react";
import Button from "../button/Button";
import "./auth.scss";

const SignIn = () => {
  return (
    <div className="authbox">
      <div className="authbox__header">
        <h2 className="authbox__header--main">Hi There!</h2>
        <h4 className="authbox__header--sub">
          We connect you with your Friends..
        </h4>
      </div>
      <div className="authbox__form">
        <form>
          <label className="authbox__label">
            Email
            <input className="authbox__input" type="text" name="email" />
          </label>
          <label className="authbox__label">
            Password
            <input className="authbox__input" type="password" name="passowrd" />
          </label>

          <Button size="full" color="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
