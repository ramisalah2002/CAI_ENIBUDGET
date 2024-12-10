import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from "../components/Chart";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import AddCard from "../components/popups/addCard";
import AddExpence from "../components/popups/AddExpense";
import Logout from "../components/popups/Logout";
import ChangeBudget from "../components/popups/changeBudget";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

import './Profile.css';
import GridViewIcon from '@mui/icons-material/GridView';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { FaCog, FaTachometerAlt, FaInbox, FaUsers, FaBox } from 'react-icons/fa';
import Img from '../img/profile.png';
import EditImg from '../img/edit.png';

function Profile() {
  const navigateTo = useNavigate();
  const [counter, setCounter] = useState(false);


  function handleAccueilClick() {
    navigateTo("../accueil");
  }
  function handleCartesClick() {
    navigateTo("../cartes");
  }
  function handleActivitesClick() {
    navigateTo("../activites");
  }
  function handleGuideClick() {
    navigateTo("../guide");
  }
  function handleProfileClick() {
    navigateTo("../profile");
  }

  function handleAnnulerClick() {
    setCounter(true);
  }

  function handleLogoutClick() {
    setCounter(true);
  }
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); 
  };
  

  return (
    <div className='main-container'>
      <div className='sidebar'>
        <div className='sidaber-top'>
          <label className='logo-label'>Enibudget</label>
          <ul className='nav-links'>
            <li className='nav-link other-link' onClick={handleAccueilClick} ><GridViewIcon className='' color="black" />Accueil</li>
            <li className='nav-link other-link' onClick={handleCartesClick}><CreditCardIcon className='other-icon' color="" />Cartes</li>
            <li className='nav-link other-link' onClick={handleActivitesClick}><SignalCellularAltIcon className='other-icon' color="" />Activités</li>
            <li className='nav-link other-link' onClick={handleGuideClick}><InfoIcon className='other-icon'  color="" />Guide</li>
            <li className='nav-link nav-selected'><SettingsIcon className='other-icon'  color="" />Profile</li>
          </ul>
        </div>
        <div className='sidebar-bottom'>
          <div className='logout-line'></div>
          <div>
            <i className='logout-btn'><LogoutIcon className='logout-icon' onClick={handleLogoutClick} color="black" />Deconnexion</i>
          </div>
        </div>
      </div>
   
      <div className='right-container'>
        <div className='header'>
          <label className='header-title'>Profile</label>
          <div className='right-header'>
            <div className='notif-container'>
              <NotificationsNoneIcon className='notif-icon'  color="black" />
            </div>
            <div className='user-eclipse'></div>
            <label className='user-name'>Hugo</label>
          </div>
        </div>

        <section className="profile-section">
          <h2 className="section-title">Modifier les informations</h2>
          <div className="profile-content">
            <div className="profile-image">
              <img src={Img} alt="Profile" />
              <button className="edit-button">
                <img src={EditImg}/>
              </button>
            </div>

            <form className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Prénom</label>
                  <input type="text" id="firstName" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Nom</label>
                  <input type="text" id="lastName" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="birthDate">Date de naissance</label>
                  <input type="date" id="birthDate" />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Genre</label>
                  <input type="text" id="gender" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Adresse mail</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Numéro de téléphone</label>
                <input type="text" id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Adresse</label>
                <input type="text" id="address" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Ville</label>
                  <input type="text" id="city" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">Provence</label>
                  <input type="text" id="state" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="postalCode">Code postal</label>
                  <input type="text" id="postalCode" />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Pays</label>
                  <input type="text" id="country" />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-button" onClick={handleAnnulerClick}>Annuler</button>
                <button type="submit" className="save-button">Enregistrer</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      {counter && (
        //<AddCard></AddCard>
        //<AddExpence></AddExpence>
        <ChangeBudget></ChangeBudget>
        //<Logout></Logout>
        
      )}
    </div>
  );
}


export default Profile;
