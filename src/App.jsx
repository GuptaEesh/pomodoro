import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddToDoModal, Header } from "./components";
import { useAuth } from "./helper";
import { RedirectAuth, RequireAuth } from "./route";
import {
  FocusScreen,
  PomoDoroApp,
  Settings,
  ErrorPage,
  Login,
  SignUp,
} from "./Screens";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleTask, setSingleTask] = useState({});
  const [loader, setLoader] = useState(false);
  const { isAuthenticated } = useAuth();
  const [theme, setTheme] = useState({
    darkMode: JSON.parse(localStorage.getItem("DarkTheme")),
    loader: false,
  });
  localStorage.setItem("DarkTheme", theme.darkMode);
  const toggleTheme = () => {
    setTheme({ ...theme, loader: true });
    setTimeout(
      () =>
        setTheme((theme) => ({
          ...theme,
          darkMode: !theme.darkMode,
          loader: false,
        })),
      700
    );
  };
  // auth -- redirectauth
  // simple -- requireauth
  return (
    <div className={theme.darkMode ? "App" : "App mode-light"}>
      <div className="app-container">
        {isModalOpen && (
          <AddToDoModal
            task={singleTask}
            setTask={setSingleTask}
            setIsModalOpen={setIsModalOpen}
            setLoader={setLoader}
          />
        )}
        {isAuthenticated && (
          <Header
            loader={theme.loader}
            theme={theme.darkMode}
            toggleTheme={toggleTheme}
          />
        )}
        <Routes>
          <Route element={<RedirectAuth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route
              path="/"
              element={
                <PomoDoroApp
                  task={singleTask}
                  setTask={setSingleTask}
                  setIsModalOpen={setIsModalOpen}
                  loader={loader}
                  setLoader={setLoader}
                />
              }
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/task/:id" element={<FocusScreen />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
