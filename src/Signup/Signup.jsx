import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from "../components/Chart";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

import './Signup.css';
import GridViewIcon from '@mui/icons-material/GridView';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { FaCog, FaTachometerAlt, FaInbox, FaUsers, FaBox } from 'react-icons/fa';
import Img from '../img/signup.png'

function Signup() {
  const navigateTo = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);



  return (
    <div className="signup-container">
      <div className="left-panel">
        <h1 className="welcome-title">Bienvenue!</h1>
        <p className="welcome-subtitle">Gérer votre propre budget</p>
        <img
          className="welcome-image"
          src={Img}
          alt="Illustration"
        />
      </div>
      <div className="right-panel">
        <h1 className="form-title">S’inscrire</h1>
        <p className="form-subtitle">
          Vous avez déjà un compte? <span className="link">Se connecter</span>
        </p>
        <form className="signup-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Nom</label>
            <input id="firstName" type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Prénom</label>
            <input id="lastName" type="text" className="form-input" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="form-input" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmation</label>
            <input id="confirmPassword" type="password" className="form-input" />
          </div>
        </div>
        <button type="submit" onClick={()=>{navigateTo("../Login")}} className="signup-button">S’inscrire</button>
      </form>
      </div>
    </div>
  );
}


export default Signup;
