import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddToDoModal, Header } from "./components";
import { FocusScreen, PomoDoroApp, Settings } from "./Screens";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <div className="app-container">
        {isModalOpen && <AddToDoModal setIsModalOpen={setIsModalOpen} />}
        <Header />
        <Routes>
          <Route
            path="/"
            element={<PomoDoroApp setIsModalOpen={setIsModalOpen} />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/task/:id" element={<FocusScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
