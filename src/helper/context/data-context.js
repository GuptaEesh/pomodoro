import { createContext, useContext, useReducer } from "react";
import { todoReducer, initial } from "../reducer/data-reducer";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [todoState, dispatchToDo] = useReducer(todoReducer, initial);
  localStorage.setItem("todoState", JSON.stringify(todoState));
  return (
    <DataContext.Provider value={{ todoState, dispatchToDo }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };
