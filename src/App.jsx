import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ChoicePage from "../pages/ChoicePage/ChoicePage";

import Chat from "../pages/Chat/Chat";
import Contact from "../pages/email-test/Contact";
import ForgotPassword from "../pages/ResetPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import EmailSent from "../pages/ResetPassword/EmailSent";
import StagiaireProjet from "../stagiairePages/Projet/Projet";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import PieChart from "../pages/charts/PieChart";
import ImageUploadForm from "../tests/ImageUploadForm";
import DisplayImages from "../tests/DisplayImages";
import Reunion from "../pages/Reunion/Reunion";
import SendMessagePage from "../pages/email-test/SendMessage";
import ReceiveMessagePage from "../pages/email-test/ReceiveMessage";

//Providers
import { AdminProvider } from "../Contexts/AdminContext";
import { StagiaireProvider } from "../Contexts/StagiaireContext";
import { EncadrantProvider } from "../Contexts/EncadrantContext";

//Administrateur pages
import Homepage from "../pages/Homepage/Homepage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Parametres from "../pages/Parametres/Parametres";
import Stagiaire from "../pages/Stagiaire/Stagiaire";
import Equipes from "../pages/Equipes/Equipes";
import Absence from "../pages/Absence/Absence";
import Projet from "../pages/Projet/Projet";
import Encadrant from "../pages/Encadrant/Encadrant";
import StagiaireProfile from "../pages/StagiaireProfile/StagiaireProfile";

//Encadrant pages
import LoginPageEncadrant from "../EncadrantPages/LoginPage/LoginPage";
import HomepageEncadrant from "../EncadrantPages/Homepage/HomepageEncadrant";
import EncadrantEquipes from "../EncadrantPages/EncadrantEquipe/EncadrantEquipes";
import ChatEncadrant from "../EncadrantPages/ChatEncadrant/ChatEncadrant";
import EncadrantAbsence from "../EncadrantPages/EncadrantAbsence/EncadrantAbsence";
import EncadrantParametres from "../EncadrantPages/EncadrantParametres/EncadrantParametres";
import StagiairePage from "../EncadrantPages/StagiairePage/StagiaireProfile";

//Stagiaire pages
import LoginPageStagiaire from "../stagiairePages/LoginPage/LoginPageStagiaire";
import StagiaireHomepage from "../stagiairePages/Homepage/Homepage";
import StagiaireChat from "../stagiairePages/StagiaireChat/StagiaireChat";
import ProjetStagiaire from "../stagiairePages/Projet/Projet";
import StagiaireAbsenceMarking from "../stagiairePages/StagiaireAbsence/StagiaireAbsenceMarking";
import Task from "../stagiairePages/Task/Task";
import MonProfile from "../stagiairePages/StagiaireProfile/MonProfile";
import DemanderStage from "../stagiairePages/DemandeStage/DemanderStage";

function App() {
  useEffect(() => {
    document.title = "MENStage";
  }, []);

  const [user, setUser] = useState(null);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<ChoicePage />} />
        </Routes>
    </Router>
  );
}
export default App;