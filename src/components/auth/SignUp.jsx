import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { register } from "../../actions";
import { Field, reduxForm } from "redux-form";
import Button from "../button/Button";
import "./auth.scss";

const Signup = ({ handleSubmit, register }) => {
  const onSubmit = values => register(values);

  return (
    <div className="authbox">
      <div className="authbox__header">
        <h2 className="authbox__header--main">Hi There!</h2>
        <h4 className="authbox__header--sub">
          We connect you with your Friends..
        </h4>
      </div>
      <form
        className="authbox__form"
        onSubmit={handleSubmit(values => onSubmit(values))}
      >
        <label className="authbox__label">Full Name</label>
        <Field
          className="authbox__input"
          name="name"
          type="text"
          component={"input"}
        />

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
          Register
        </Button>
      </form>
      <div className="authbox__helper">Already have an Account</div>
    </div>
  );
};

export default compose(
  reduxForm({ form: "login" }),
  connect(null, { register })
)(Signup);
