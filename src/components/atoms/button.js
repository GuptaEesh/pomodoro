import React from "react";

const Button = ({ btnClass, btnFunc, btnText }) => {
  return (
    <button onClick={btnFunc} className={`btn ${btnClass}`}>
      {btnText}
    </button>
  );
};

export { Button };
