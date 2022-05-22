export {
  signUpHandler,
  loginHandler,
  addTask,
  updateTask,
  deleteTask,
  getAllNotes,
} from "./server-requests";
export { AuthProvider, useAuth } from "./context/auth-context";
export { useData, DataProvider } from "./context/data-context";
