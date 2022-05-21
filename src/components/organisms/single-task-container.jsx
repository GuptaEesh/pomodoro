import React, { useState } from "react";
import { AiTwotoneEdit, AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { deleteTask, useAuth, useData } from "../../helper";

const SingleTaskContainer = ({ task, setTask, setIsModalOpen }) => {
  const [deleteLoader, setDeleteLoader] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuth();
  const { dispatchToDo } = useData();
  const editTodoHandler = (task) => {
    setIsModalOpen(true);
    setTask({ ...task, isEdit: true });
  };
  const deleteTodoHandler = (task) => {
    deleteTask(token, task, dispatchToDo, setDeleteLoader);
  };
  const openTask = (task) => {
    navigate(`/task/${task._id}`);
  };
  const handleDone = (task) => {
    dispatchToDo({ type: "TASK_STATUS", payload: task });
  };
  return (
    <section
      key={task._id}
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
      <AiTwotoneEdit onClick={() => editTodoHandler(task)} className="flex-1" />
      {deleteLoader ? (
        <ReactLoading
          type="spin"
          color="var(--white)"
          height="1.2rem"
          width="1.2rem"
        />
      ) : (
        <AiFillDelete onClick={() => deleteTodoHandler(task)} />
      )}
    </section>
  );
};

export { SingleTaskContainer };
