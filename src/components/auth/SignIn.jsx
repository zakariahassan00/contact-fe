import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { login } from "../../actions";
import { reduxForm } from "redux-form";
import { required, email, minValue6 } from "./validation";
import CustomInput from "./CustomInput";
import Button from "../button/Button";
import "./auth.scss";
import { Link } from "react-router-dom";

const SignIn = ({ handleSubmit, login, history, user }) => {
  const onSubmit = values =>
    login(values, () => {
      history.push("/main");
    });

  return (
    <div className="authbox-container">
      <div className="authbox">
        <div className="authbox__header">
          <h2 className="authbox__header--main">Hi There!</h2>
          <h4 className="authbox__header--sub">
            We connect you with your Friends..
          </h4>
        </div>
        <h5 className="authbox__error">{user.error}</h5>
        <div className="authbox__form">
          <form onSubmit={handleSubmit(values => onSubmit(values))}>
            <label className="authbox__label">Email</label>
            <CustomInput name="email" validate={[required, email]} />

            <label className="authbox__label">Password</label>
            <CustomInput
              name="password"
              type="password"
              validate={[required, minValue6]}
            />

            <Button size="full" color="primary">
              Login
            </Button>
          </form>

          <div className="authbox__helper">
            <Link to="/register">Create a New Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default compose(
  reduxForm({ form: "login" }),
  connect(mapStateToProps, { login })
)(SignIn);
