import React from "react";
import { Button } from "../components";
import "./pomodoro-app-screen/pomodoro-app-screen.css";
const FocusScreen = () => {
  return (
    <div className="flex gap-4 align-center flex-column padding-1 text-combo pomodoro-screen">
      <div className="focus-screen padding-1 flex flex-column align-center justify-center">
        <h1>Task Name :- Go There</h1>
        <span className="timer">25:00</span>
        <section className="flex flex-wrap justify-space-evenly gap-1 width-p-100">
          <Button
            btnClass="btn bold secondary-pomodoro-btn text-combo-2"
            btnText="Pause"
          />
          <Button
            btnClass="primary-pomodoro-btn text-combo bold"
            btnText="Restart"
          />
        </section>
      </div>
      <section className="flex flex-wrap justify-center gap-1">
        <Button
          btnClass="secondary-pomodoro-btn text-combo-2"
          btnText="Short Break"
        />
        <Button
          btnClass="secondary-pomodoro-btn text-combo-2"
          btnText="Long Break"
        />
      </section>
      <section className="flex gap-1 flex-column align-center">
        <h1>Task Description</h1>
        <p className="focus-description">
          {" "}
          dsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssss{" "}
        </p>
      </section>
    </div>
  );
};

export { FocusScreen };
