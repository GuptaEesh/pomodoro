import React from "react";
import { Input } from "../../atoms";
import "./settings-slider.css";

const SettingsSlider = ({ sliderName, min, max, step }) => {
  return (
    <label className="width-p-100">
      <h2 className="text-combo">{sliderName} (in minutes)</h2>
      <Input
        listInput="steplist"
        inputType="range"
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
            class="bold text-combo"
            value={min + step * index}
            label={min + step * index}
          ></option>
        ))}
      </datalist>
    </label>
  );
};

export { SettingsSlider };
