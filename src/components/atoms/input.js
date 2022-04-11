import React from "react";

const Input = ({
  inputFunc,
  inputClass,
  inputPlaceHolder,
  inputType,
  inputValue,
}) => {
  return (
    <input
      className={inputClass}
      type={inputType}
      placeholder={inputPlaceHolder}
      aria-label={inputType}
      value={inputValue}
      onChange={inputFunc}
    />
  );
};

export { Input };
