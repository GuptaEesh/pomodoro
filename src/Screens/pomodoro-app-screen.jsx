import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Button, SingleTaskContainer } from "../components";
import { getAllNotes, useAuth, useData } from "../helper";
import { EmptyPage } from "./empty-page";
import "./screen.css";
const PomoDoroApp = ({ setTask, setIsModalOpen, loader, setLoader }) => {
  const { todoState, dispatchToDo } = useData();
  const { todo, searchTerm } = todoState;
  const [selectedTag, setSelectedTag] = useState("All");
  const { token } = useAuth();
  useEffect(() => {
    window.document.title = "Pomo Home";
    getAllNotes(token, dispatchToDo, setLoader);
  }, []);
  let filteredTodo = todo.filter((todo) =>
    todo.tag === selectedTag ? todo : selectedTag === "All" && todo
  );
  filteredTodo = filteredTodo.filter((todo) => todo.name.includes(searchTerm));

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
        {loader ? (
          <h1 className="flex flex-column align-center gap-2 lg">
            Loading your tasks...
          </h1>
        ) : tagNameArray.length === 0 ? (
          <h1 className="flex flex-column align-center gap-2 lg">
            Add To-Do's and get started for the day.
            <Button
              btnClass=" btn bold secondary-pomodoro-btn text-combo-2"
              btnText="Add"
              btnFunc={() => setIsModalOpen(true)}
            />
          </h1>
        ) : !filteredTodo.length ? (
          <EmptyPage />
        ) : (
          filteredTodo?.map((task) => (
            <SingleTaskContainer
              setTask={setTask}
              task={task}
              setIsModalOpen={setIsModalOpen}
            />
          ))
        )}
      </div>
    </div>
  );
};

export { PomoDoroApp };
