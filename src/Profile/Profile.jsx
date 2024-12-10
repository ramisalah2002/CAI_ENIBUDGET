import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from "../components/Chart";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

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

function Profile() {
  const navigateTo = useNavigate();

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("par semaine");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = ["par semaine", "par mois", "par an"];

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
            <i className='logout-btn'><LogoutIcon className='logout-icon'  color="black" />Deconnexion</i>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <div className='header'>
          <label className='header-title'>Accueil</label>
          <div className='right-header'>
            <div className='notif-container'>
              <NotificationsNoneIcon className='notif-icon'  color="black" />
            </div>
            <div className='user-eclipse'></div>
            <label className='user-name'>Hugo</label>
          </div>
        </div>
        
      </div>
    </div>
  );
}


export default Profile;
