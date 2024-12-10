import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from "../components/Chart";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

import './Login.css';
import GridViewIcon from '@mui/icons-material/GridView';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { FaCog, FaTachometerAlt, FaInbox, FaUsers, FaBox } from 'react-icons/fa';
import Img from '../img/login.png'

function Login() {
  const navigateTo = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);



  return (
    <div className="login-container">
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
        <h1 className="form-title">Se connecter</h1>
        <p className="form-subtitle">
          Vous n’avez pas de compte? <span className="link">S’inscrire</span>
        </p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" className="form-input" />
            <span className="forgot-password">Mot de passe oublié?</span>
          </div>
          <button type="submit" onClick={()=>{navigateTo("../Accueil")}} className="login-button" >Se connecter</button>
        </form>
      </div>
    </div>
  );
}


export default Login;
