import React from "react";

const Button = ({ btnClass, btnFunc, btnText, type }) => {
  return (
    <button type={type} onClick={btnFunc} className={`btn ${btnClass}`}>
      {btnText}
    </button>
  );
};

export { Button };
