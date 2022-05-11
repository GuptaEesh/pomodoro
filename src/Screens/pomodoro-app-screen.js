import React from "react";
import { AiFillPlusCircle, AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import "./screen.css";
const PomoDoroApp = ({ setIsModalOpen }) => {
  return (
    <div className="pomodoro-screen flex gap-4 flex-column padding-1 text-combo">
      <div className="gap-1 flex flex-column">
        <section className="flex gap-1 align-center justify-space-between">
          <h2 className="size-16">Generate ToDo</h2>
          <AiFillPlusCircle
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer size-16"
          />
        </section>
        <div className="hr"></div>
      </div>
      <div className="todo-container">
        <section className="flex padding-1 align-center cursor-pointer todo justify-space-between">
          <h4 className="flex-3">Go there</h4>
          <AiTwotoneEdit className="flex-1" />
          <AiFillDelete />
        </section>
        <section className="flex padding-1 align-center cursor-pointer todo justify-space-between">
          <h4 className="flex-3">Come here</h4>
          <AiTwotoneEdit className="flex-1" />
          <AiFillDelete />
        </section>
      </div>
    </div>
  );
};

export { PomoDoroApp };
