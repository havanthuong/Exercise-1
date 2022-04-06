import React from "react";

const Button = () => {
  const inform = () => {
    alert("Log in OK!");
  };
  return (
    <div>
      <button onClick={inform}>Log in</button>
    </div>
  );
};

export default Button;
