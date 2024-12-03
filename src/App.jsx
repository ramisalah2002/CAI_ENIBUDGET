import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";

import ChoicePage from "../pages/ChoicePage/ChoicePage";


function App() {
  useEffect(() => {
    document.title = "MENStage";
  }, []);

  const [user, setUser] = useState(null);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Accueil/>} />
        </Routes>
    </Router>
  );
}
export default App;