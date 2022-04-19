import React, { useState } from "react";
import { useData } from "../../../helper";
import { Button, Input } from "../../atoms";
import { v4 as uuid } from "uuid";
import "./add-todo-modal.css";
const AddToDoModal = ({ task, setTask, setIsModalOpen }) => {
  const { dispatchToDo, todoState } = useData();
  const { todo } = todoState;
  const formHandler = (e) => {
    e.preventDefault();
    dispatchToDo({ type: "ADD_TODO", payload: task });
    setTask({ name: "", duration: null, description: "" });
    setIsModalOpen(false);
  };
  const taskHandler = (e) =>
    setTask((task) => ({ ...task, [e.target.name]: e.target.value }));
  const closeModalHandler = () => {
    setTask((task) => ({
      ...task,
      name: "",
      tag: "",
      duration: null,
      description: "",
      isEdit: false,
    }));
    setIsModalOpen(false);
  };
  const reducerTodoTag = (acc, curr) =>
    acc.find((foundTag) => foundTag === curr.tag) ? acc : [...acc, curr.tag];
  const tagNameArray = todo.reduce(reducerTodoTag, []);
  const [isTagContainerOpen, setIsTagContainerOpen] = useState(false);
  const showTagsHandler = () => setIsTagContainerOpen(!isTagContainerOpen);
  const tagHandler = (tag) => {
    setTask((task) => ({ ...task, tag: tag }));
    showTagsHandler();
  };
  return (
    <div className="todo-modal flex align-center justify-center">
      <form
        onSubmit={formHandler}
        className="todo-form flex flex-column gap-1 padding-1"
      >
        <label className="flex flex-column">
          To-Do
          <Input
            inputFunc={taskHandler}
            inputName="name"
            inputValue={task.name}
            inputClass="input-text md"
            inputPlaceHolder="Title..."
          />
        </label>
        <label className="flex flex-column position-relative">
          Tag
          <Input
            inputFunc={taskHandler}
            inputName="tag"
            inputValue={task.tag}
            inputClass="input-text md"
            inputPlaceHolder="Add a tag..."
          />
          <span
            onClick={showTagsHandler}
            className="position-absolute drop-down cursor-pointer"
          >
            {isTagContainerOpen ? "^" : "v"}
          </span>
          {isTagContainerOpen && tagNameArray.length > 0 && (
            <div className="position-absolute flex flex-column align-center tag-container">
              {tagNameArray.map((tag) => (
                <h2
                  className="text-center tag-option cursor-pointer"
                  key={tag}
                  onClick={() => tagHandler(tag)}
                >
                  {tag}
                </h2>
              ))}
            </div>
          )}
        </label>
        <label className="flex flex-column">
          Description
          <textarea
            onChange={taskHandler}
            name="description"
            value={task.description}
          />
        </label>
        <label className="flex flex-column">
          To-Do Duration
          <Input
            inputFunc={taskHandler}
            inputName="duration"
            inputValue={task.duration}
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
            btnFunc={
              task.isEdit === true
                ? null
                : () =>
                    setTask((task) => ({
                      ...task,
                      isEdit: false,
                      isDone: false,
                      id: uuid(),
                    }))
            }
            btnText={task.isEdit ? "Update" : "Add"}
            type="submit"
          />
          <Button
            btnClass="primary-pomodoro-btn text-combo bold"
            btnText="Close"
            btnFunc={closeModalHandler}
          />
        </section>
      </form>
    </div>
  );
};

export { AddToDoModal };
