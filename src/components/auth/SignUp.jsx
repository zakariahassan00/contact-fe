import React from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import { register } from "../../actions";
import { Field, reduxForm } from "redux-form";
import { required, email, minValue6, dateFormat } from "./validation";
import Button from "../button/Button";
import CustomInput from "./CustomInput";
// import CustomSelect from "./CustomSelect";
import "./auth.scss";

const Signup = ({ handleSubmit, register, history }) => {
  const onSubmit = values =>
    register(values, () => {
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
      <form
        className="authbox__form"
        onSubmit={handleSubmit(values => onSubmit(values))}
      >
        <label className="authbox__label">Full Name</label>
        <CustomInput name="name" validate={required} />

        <label className="authbox__label">Email</label>
        <CustomInput name="email" validate={[required, email]} />

        <label className="authbox__label">Password</label>
        <CustomInput
          name="password"
          type="password"
          validate={[required, minValue6]}
        />

        <label className="authbox__label">Birth Date</label>
        <CustomInput
          name="DOB"
          validate={[required, dateFormat]}
          placeholder="month/day/year (eg. 12/20/1996) "
        />

        <div>
          <label className="authbox__label">Gender</label>
          <Field name="gender" component="select" className="authbox__input">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </div>

        <Button size="full" color="primary">
          Register
        </Button>
      </form>

      <div className="authbox__helper">
        <Link to="/login">Already have an Account</Link>
      </div>
    </div>
  );
};

export default compose(
  reduxForm({ form: "login" }),
  connect(null, { register })
)(Signup);
