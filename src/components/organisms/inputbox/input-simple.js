import { Input } from "../../atoms";

export function InputSimple({
  title: name,
  inputClass,
  inputPlaceHolder,
  inputType,
  inputValue,
  inputFunc,
  pattern,
}) {
  return (
    <label className="flex flex-column">
      <span className="text-dark">{name}</span>
      <Input
        inputClass={inputClass}
        inputType={inputType}
        pattern={pattern}
        inputPlaceHolder={inputPlaceHolder}
        inputValue={inputValue}
        inputFunc={inputFunc}
      />
    </label>
  );
}
