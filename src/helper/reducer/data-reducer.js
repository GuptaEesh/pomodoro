const todoSettings = JSON.parse(localStorage.getItem("todoState")) ?? {
  todo: [],
  shortBreak: 2,
  longBreak: 10,
};
const initial = {
  todo: todoSettings.todo,
  shortBreak: todoSettings.shortBreak,
  longBreak: todoSettings.longBreak,
  searchTerm: "",
};
const todoReducer = (todoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...todoState,
        todo: action.payload,
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
          task._id === action.payload._id
            ? { ...task, isDone: !action.payload.isDone }
            : task
        ),
      };
    case "UPDATE_SEARCH":
      return {
        ...todoState,
        searchTerm: action.payload,
      };
    default:
      return todoState;
  }
};
export { initial, todoReducer };
