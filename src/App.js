import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Art Gobblers Marketplace</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
