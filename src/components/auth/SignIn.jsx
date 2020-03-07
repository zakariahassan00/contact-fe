import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { login } from "../../actions";
import { Field, reduxForm } from "redux-form";
import Button from "../button/Button";
import "./auth.scss";

const SignIn = ({ handleSubmit, login, history }) => {
  const onSubmit = values =>
    login(values, () => {
      history.push("/main");
    });

  return (
    <div className="authbox">
      <div className="authbox__header">
        <h2 className="authbox__header--main">Hi There!</h2>
        <h4 className="authbox__header--sub">
          We connect you with your Friends..
        </h4>
      </div>
      <div className="authbox__form">
        <form onSubmit={handleSubmit(values => onSubmit(values))}>
          <label className="authbox__label">Email</label>
          <Field
            className="authbox__input"
            name="email"
            type="text"
            component={"input"}
          />
          <label className="authbox__label">Password</label>
          <Field
            className="authbox__input"
            name="password"
            type="password"
            component={"input"}
          />

          <Button size="full" color="primary">
            Login
          </Button>
        </form>

        <div className="authbox__helper">Create a New Account</div>
      </div>
    </div>
  );
};

export default compose(
  reduxForm({ form: "login" }),
  connect(null, { login })
)(SignIn);
