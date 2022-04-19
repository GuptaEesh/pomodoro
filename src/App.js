import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddToDoModal, Header } from "./components";
import { FocusScreen, PomoDoroApp, Settings } from "./Screens";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleTask, setSingleTask] = useState({});
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
  return (
    <div className={theme.darkMode ? "App" : "App mode-light"}>
      <div className="app-container">
        {isModalOpen && (
          <AddToDoModal
            task={singleTask}
            setTask={setSingleTask}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <Header
          loader={theme.loader}
          theme={theme.darkMode}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <PomoDoroApp
                task={singleTask}
                setTask={setSingleTask}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/task/:id" element={<FocusScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
