import React, { useEffect, useReducer, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AiFillTag } from "react-icons/ai";
import { Button } from "../../components";
import { useData } from "../../helper";
import "../screen.css";
import {
  handleLongBreak,
  handleResetTimer,
  handleShortBreak,
  handleStartTimer,
  timerReducerControl,
} from "./focus-screen-helpers";
const FocusScreen = () => {
  const { id } = useParams();
  const { todoState } = useData();
  const [timerStatus, setTimerStatus] = useState("Start");
  const { todo, longBreak, shortBreak } = todoState;
  const task = todo.find((openedTask) => openedTask.id === id);
  const initial = {
    runningTime: Number(task?.duration) * 60 || 0,
    intervalId: null,
    bgMoodColor: null,
    bgTitle: "Focus",
  };
  const [timerControl, dispatchTimerControl] = useReducer(
    timerReducerControl,
    initial
  );
  const { runningTime, intervalId, bgMoodColor, bgTitle } = timerControl;
  let minutes = Math.trunc(runningTime / 60);
  let seconds = runningTime % 60;
  useEffect(() => {
    window.document.title = minutes + " : " + seconds + " || Pomo Focus";
  }, [minutes, seconds]);
  useEffect(() => {
    let interval = null;
    if (timerStatus === "Pause") {
      interval = setInterval(() => {
        dispatchTimerControl({ type: "UPDATE_TIMER" });
      }, 1000);
    }
    dispatchTimerControl({ type: "SET_INTERVAL", payload: interval });
  }, [timerStatus]);

  if (runningTime < 0) {
    setTimerStatus("Start");
    clearInterval(intervalId);
    dispatchTimerControl({ type: "SET_TIMER", payload: shortBreak * 60 || 0 });
  }
  const resetTimer = () => handleResetTimer(dispatchTimerControl, task);
  const startTimer = () => handleStartTimer(intervalId, setTimerStatus);
  const shortBreakHandler = () =>
    handleShortBreak(dispatchTimerControl, shortBreak);
  const longBreakHandler = () =>
    handleLongBreak(dispatchTimerControl, longBreak);
  return !task ? (
    <Navigate to="/" />
  ) : (
    <div
      className="flex gap-2 align-center flex-column padding-1 text-combo pomodoro-screen"
      style={{ backgroundColor: bgMoodColor }}
    >
      <span className="position-relative width-max-content tag-holder">
        <AiFillTag className="position-absolute tag-tagged" />
        <span className="tag-name bold" style={{ color: bgMoodColor }}>
          {task.tag}
        </span>
      </span>
      <div className="focus-screen padding-1 flex flex-column align-center justify-center">
        <span>
          Task Name :- <span className="bold">{task.name}</span>
        </span>

        <span>
          Mode :-
          <span className="bold" style={{ color: bgMoodColor }}>
            {bgTitle}
          </span>
        </span>
        <section className="timer flex">
          <span className="flex">
            {minutes.toString().length === 1 ? "0" + minutes : minutes}
          </span>{" "}
          <span className="flex align-center justify-center">:</span>
          <span className="flex">
            {seconds.toString().length === 1 ? "0" + seconds : seconds}
          </span>
        </section>
        <section className="flex flex-wrap justify-space-evenly gap-1 width-p-100">
          <Button
            btnClass="btn bold secondary-pomodoro-btn text-combo-2"
            btnText={timerStatus}
            btnFunc={startTimer}
          />
          <Button
            btnClass="primary-pomodoro-btn text-combo bold"
            btnText="Reset Task"
            btnFunc={resetTimer}
          />
        </section>
      </div>
      <section className="flex flex-wrap justify-center gap-1">
        <Button
          btnClass="secondary-pomodoro-btn text-combo-2"
          btnText="Short Break"
          btnFunc={shortBreakHandler}
        />
        <Button
          btnClass="secondary-pomodoro-btn text-combo-2"
          btnText="Long Break"
          btnFunc={longBreakHandler}
        />
      </section>
      <section className="flex gap-1 flex-column align-center">
        <h1>Task Description</h1>
        <p className="focus-description size-12 text-center">
          {task.description}
        </p>
      </section>
    </div>
  );
};

export { FocusScreen };
