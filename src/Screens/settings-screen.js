import React from "react";
import { SettingsSlider } from "../components";

const Settings = () => {
  return (
    <div className="flex gap-4 align-center justify-space-around flex-column padding-1 text-combo pomodoro-screen">
      {[
        { sliderName: "Short Break", min: 10, max: 35, step: 5 },
        { sliderName: "Long Break", min: 10, max: 60, step: 10 },
      ].map(({ sliderName, min, max, step }) => (
        <SettingsSlider
          sliderName={sliderName}
          min={min}
          max={max}
          step={step}
        />
      ))}
    </div>
  );
};

export { Settings };
