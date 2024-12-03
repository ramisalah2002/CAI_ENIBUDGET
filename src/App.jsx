import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Accueil from "./Accueil/Accueil";
import Cartes from "./Cartes/Cartes";
import Activites from "./Activites/Activites";
import Guide from "./Guide/Guide";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";


function App() {
  useEffect(() => {
    document.title = "Enibudget";
  }, []);

  const [user, setUser] = useState(null);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/cartes" element={<Cartes />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
  );
}
export default App;