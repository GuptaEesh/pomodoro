import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { FocusScreen, PomoDoroApp, Settings } from "./Screens";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<PomoDoroApp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/task/:id" element={<FocusScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
