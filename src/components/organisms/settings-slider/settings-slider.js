import React from "react";
import { Input } from "../../atoms";
import "./settings-slider.css";

const SettingsSlider = ({
  sliderName,
  min,
  max,
  step,
  break: breakStatus,
  setBreak,
}) => {
  return (
    <label className="width-p-100">
      <h2 className="text-combo">{sliderName} (in minutes)</h2>
      <Input
        listInput="steplist"
        inputType="range"
        inputValue={breakStatus}
        inputFunc={(e) =>
          setBreak({
            type: "SET_BREAK",
            payload: { name: sliderName, breakTime: e.target.value },
          })
        }
        min={min}
        max={max}
        step={step}
        inputClass="range-slider"
      />
      <datalist
        id="steplist"
        className="flex width-p-100 align-center justify-space-between"
      >
        {[...Array((max - min) / step + 1)].map((iterator, index) => (
          <option
            key={index}
            className="bold text-combo"
            value={
              (min + step * index).toString().length === 1
                ? "0" + (min + step * index)
                : min + step * index
            }
            label={min + step * index}
          ></option>
        ))}
      </datalist>
    </label>
  );
};

export { SettingsSlider };
