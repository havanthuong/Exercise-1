import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor="">{props.title}</label>
      <input
        value={props.inputValue}
        type={props.inputType}
        placeholder={props.placeholderText}
        onChange={props.fOnChange}
      />
    </div>
  );
};

export default Input;
