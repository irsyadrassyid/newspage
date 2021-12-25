import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Page/Home";
import "./assets/css/styles.css";

import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./Page/Portfolio";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
