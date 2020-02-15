import React from "react";
import { Field } from "redux-form";

const renderField = ({ input, type, meta: { touched, error, warning } }) => (
  <div>
    {touched && error && <span className="authbox__input-error">{error}</span>}
    <select className="authbox__input">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
);

const CustomSelect = ({ name, validate, children }) => {
  return (
    <Field name={name} validate={validate} component={renderField}></Field>
  );
};

export default CustomSelect;
