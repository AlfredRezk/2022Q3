import React from "react";
import useInput from "../hooks/useInput";

const FormInput = ({type, placeholder, validation}) => {
  const { value, hasError, blurHandler, changeHandler} = useInput(validation);
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`form-control mb-2 ${hasError && "is-invalid"}`}
      onChange={changeHandler}
      onBlur={blurHandler}
      value={value}
    />
  );
};

export default FormInput;
