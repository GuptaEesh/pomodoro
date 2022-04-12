import React from "react";
import { Button, Input } from "../../atoms";
import "./add-todo-modal.css";
const AddToDoModal = ({ setIsModalOpen }) => {
  return (
    <div className="todo-modal flex align-center justify-center">
      <form className="todo-form flex flex-column gap-1 padding-1">
        <label className="flex flex-column">
          To-Do
          <Input inputClass="input-text md" inputPlaceHolder="Title..." />
        </label>
        <label className="flex flex-column">
          Description
          <textarea />
        </label>
        <label className="flex flex-column">
          To-Do
          <Input
            inputClass="input-text md"
            inputType="number"
            min={5}
            max={120}
            inputPlaceHolder="Focus Time..."
          />
        </label>
        <section className="flex align-center gap-1">
          <Button
            btnClass="btn bold secondary-pomodoro-btn text-combo-2"
            btnText="Add"
            type="submit"
          />
          <Button
            btnClass="primary-pomodoro-btn text-combo bold"
            btnText="Close"
            btnFunc={() => setIsModalOpen(false)}
          />
        </section>
      </form>
    </div>
  );
};

export { AddToDoModal };
