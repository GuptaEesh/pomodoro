import React, { useEffect } from "react";
import { SettingsSlider } from "../components";
import { useData } from "../helper";

const Settings = () => {
  const { todoState, dispatchToDo } = useData();
  const { shortBreak, longBreak } = todoState;
  useEffect(() => {
    window.document.title = "Pomo Settings";
  }, []);
  const breakArray = [
    {
      sliderName: "Short Break",
      min: 2,
      max: 12,
      step: 2,
      breakStatus: shortBreak,
      setBreak: dispatchToDo,
    },
    {
      sliderName: "Long Break",
      min: 10,
      max: 60,
      step: 10,
      breakStatus: longBreak,
      setBreak: dispatchToDo,
    },
  ];
  return (
    <div className="flex gap-4 align-center justify-space-around flex-column padding-1 text-combo pomodoro-screen">
      {breakArray?.map(
        ({ sliderName, min, max, step, breakStatus, setBreak }) => (
          <SettingsSlider
            key={sliderName}
            sliderName={sliderName}
            min={min}
            max={max}
            step={step}
            break={breakStatus}
            setBreak={setBreak}
          />
        )
      )}
    </div>
  );
};

export { Settings };
