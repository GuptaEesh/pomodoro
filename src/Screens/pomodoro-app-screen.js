import React, { useEffect, useState } from "react";
import {
  AiFillPlusCircle,
  AiTwotoneEdit,
  AiFillDelete,
  AiFillCloseCircle,
} from "react-icons/ai";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { useData } from "../helper";
import { EmptyPage } from "./empty-page";
import "./screen.css";
const PomoDoroApp = ({ setTask, setIsModalOpen }) => {
  const { todoState, dispatchToDo } = useData();
  const { todo, searchTerm } = todoState;
  const [selectedTag, setSelectedTag] = useState("All");
  console.log(searchTerm);
  useEffect(() => {
    window.document.title = "Pomo Home";
  }, []);
  let filteredTodo = todo.filter((todo) =>
    todo.tag === selectedTag ? todo : selectedTag === "All" && todo
  );
  filteredTodo = filteredTodo.filter((todo) => todo.name.includes(searchTerm));
  const navigate = useNavigate();
  const editTodoHandler = (task) => {
    setIsModalOpen(true);
    setTask({ ...task, isEdit: true });
  };
  const deleteTodoHandler = (task) => {
    dispatchToDo({ type: "DELETE_TODO", payload: task });
  };
  const openTask = (task) => {
    navigate(`/task/${task.id}`);
  };
  const handleDone = (task) => {
    dispatchToDo({ type: "TASK_STATUS", payload: task });
  };
  const reducerTodoTag = (acc, curr) =>
    acc.find((foundTag) => foundTag === curr.tag) ? acc : [...acc, curr.tag];
  const tagNameArray = todo.reduce(reducerTodoTag, []);

  return (
    <div className="pomodoro-screen flex gap-4 flex-column padding-1 text-combo">
      <div className="gap-1 flex flex-column">
        <section className="flex gap-1 align-center justify-space-between">
          <h2 className="size-16">Generate ToDo</h2>
          <AiFillPlusCircle
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer size-20"
          />
        </section>
        <div className="hr"></div>
      </div>

      <div className="eg-chips">
        {["All", ...tagNameArray].map((tag) => (
          <h1
            onClick={() => setSelectedTag(tag)}
            className={`chip tag-${
              selectedTag === tag ? "selected" : "present"
            } bold md cursor-pointer justify-center`}
            key={tag}
          >
            {tag.length > 4 ? tag.slice(0, 3) + "..." : tag}
          </h1>
        ))}
      </div>
      <div className="todo-container">
        {!filteredTodo.length ? (
          <EmptyPage />
        ) : tagNameArray.length === 0 ? (
          <h1 className="flex flex-column align-center gap-2 lg">
            Add To-Do's and get started for the day.
            <Button
              btnClass=" btn bold secondary-pomodoro-btn text-combo-2"
              btnText="Add"
              btnFunc={() => setIsModalOpen(true)}
            />
          </h1>
        ) : (
          filteredTodo?.map((task) => (
            <section
              key={task.id}
              className={`flex align-center cursor-pointer todo ${
                !task.isDone ? "pending" : "done"
              } justify-space-between`}
            >
              {task.isDone ? (
                <IoCheckmarkDoneCircleSharp onClick={() => handleDone(task)} />
              ) : (
                <AiFillCloseCircle onClick={() => handleDone(task)} />
              )}
              <h4 onClick={() => openTask(task)} className="task-name flex-3">
                {task.name}
              </h4>
              <AiTwotoneEdit
                onClick={() => editTodoHandler(task)}
                className="flex-1"
              />
              <AiFillDelete onClick={() => deleteTodoHandler(task)} />
            </section>
          ))
        )}
      </div>
    </div>
  );
};

export { PomoDoroApp };
