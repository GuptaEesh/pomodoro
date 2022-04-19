const todoSettings = JSON.parse(localStorage.getItem("todoState")) ?? {
  todo: [],
  shortBreak: 2,
  longBreak: 10,
};
const initial = {
  todo: todoSettings.todo,
  shortBreak: todoSettings.shortBreak,
  longBreak: todoSettings.longBreak,
};
const todoReducer = (todoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...todoState,
        todo: action.payload.isEdit
          ? todoState.todo.map((task) =>
              task.id === action.payload.id ? action.payload : task
            )
          : [...todoState.todo, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...todoState,
        todo: todoState.todo.filter((task) => task.id !== action.payload.id),
      };
    case "SET_BREAK":
      return action.payload.name === "Short Break"
        ? {
            ...todoState,
            shortBreak: Number(action.payload.breakTime),
          }
        : {
            ...todoState,
            longBreak: Number(action.payload.breakTime),
          };
    case "TASK_STATUS":
      return {
        ...todoState,
        todo: todoState.todo.map((task) =>
          task.id === action.payload.id
            ? { ...task, isDone: !action.payload.isDone }
            : task
        ),
      };

    default:
      return todoState;
  }
};
export { initial, todoReducer };
