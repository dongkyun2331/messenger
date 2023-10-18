import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";

const App = () => {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
