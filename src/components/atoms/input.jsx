import React from "react";

const Input = ({
  inputFunc,
  inputClass,
  inputPlaceHolder,
  inputType,
  inputValue,
  min,
  max,
  step,
  listInput,
  inputName,
}) => {
  return (
    <input
      className={inputClass}
      type={inputType}
      placeholder={inputPlaceHolder}
      aria-label={inputType}
      name={inputName}
      min={min}
      max={max}
      step={step}
      value={inputValue}
      onChange={inputFunc}
      list={listInput}
      required
    />
  );
};

export { Input };
