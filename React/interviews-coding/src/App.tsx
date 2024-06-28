import React from "react";
import Home from "./pages/Home";
import ReactTopic from "./pages/ReactTopic";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<ReactTopic />} />
      </Routes>
    </>
  );
};

export default App;
