import React from "react";

const Button = (props) => {
  return (
    <div>
      {/* <button onClick={inform}>Log in</button> */}
      <button disabled={props.bDisable} onClick={props.bOnClick}>{ props.name}</button>
    </div>
  );
};

export default Button;
