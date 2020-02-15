import React from "react";
import { Field } from "redux-form";

const renderField = ({ input, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      {touched && error && (
        <span className="authbox__input-error">{error}</span>
      )}
      <input {...input} type={type} className="authbox__input" />
    </div>
  </div>
);

const CustomInput = ({ name, type = "text", validate }) => {
  return (
    <Field
      name={name}
      type={type}
      validate={validate}
      component={renderField}
    />
  );
};

export default CustomInput;
