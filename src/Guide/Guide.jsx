import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from "../components/Chart";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

import './Guide.css';
import GridViewIcon from '@mui/icons-material/GridView';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '../components/BookmarksIcon';
import PencilEditIcon from '../components/PencilEditIcon';
import FilterIcon from '../components/FilterIcon';
import ArrowDownIcon from "../components/ArrowDownIcon";
import MoreIcon from "../components/MoreIcon";
import MenuIcon from "../components/MenuIcon";
import GroupIcon from "../components/GroupIcon";
import Logout from "../components/popups/Logout";

import { FaCog, FaTachometerAlt, FaInbox, FaUsers, FaBox } from 'react-icons/fa';
import SupportImg from "../img/support.png";


function Guide() {
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

  function handleLogoutClick() {
    setCounter(true);
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
          <ul className='nav-links-1'>
            <li className='nav-link other-link' onClick={handleAccueilClick}><GridViewIcon className='' color="black" />Accueil</li>
            <li className='nav-link other-link' onClick={handleCartesClick}><CreditCardIcon className='other-icon' color="" />Cartes</li>
            <li className='nav-link other-link' onClick={handleActivitesClick}><SignalCellularAltIcon className='other-icon' color="" />Activités</li>
            <li className='nav-link nav-selected' onClick={handleGuideClick}><InfoIcon className='other-icon'  color="" />Guide</li>
            <li className='nav-link other-link' onClick={handleProfileClick}><SettingsIcon className='other-icon'  color="" />Profile</li>
          </ul>
        </div>
        <div className='sidebar-bottom'>
          <div className='logout-line'></div>
          <div>
          <i className='logout-btn-1' onClick={handleLogoutClick}><LogoutIcon className='logout-icon'  color="black" />Deconnexion</i>
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
        
        <div className='container'>
          {/* Container gauche */}
          <div className='left-container'>
            <label className='text-research-name'>Rechercher une question</label>
            <label className='text-question-to-tap'>Tapez votre question ou cherchez un mot clé</label>
            <div className='input-div'>

            <input 
              className='input-question' 
              type='text' 
              placeholder='Commencez l’écriture' 
            />
            <SearchIcon className='other-icon' color="" />
            </div>
            <div className='layout-start'>
              <label className='text-start'>Commencez</label>
            </div>
            <div className='question-exemples'>
              <label className='text-question-exemple'>Question exemple 1</label>
              <label className='text-question-exemple'>Question exemple 2</label>
              <label className='text-question-exemple'>Question exemple 3</label>
              <label className='text-question-exemple'>Question exemple 4</label>
              <label className='text-question-exemple'>Question exemple 5</label>
            </div>
          <div className='right-container-support'>
            <div className='layout-support'>
              <label className='text-need-assistance'>Vous avez encore besoin d’une assistance ?</label>
              <label className='text-send-question'>Envoyer votre question par mail</label>
              <button className='bouton-contact'>
                <span className='text-bouton-contact'>Contactez-nous</span>
              </button>
              <img className="image-support" src={SupportImg}></img>
            </div>
          </div>
          </div>

          {/* Container droit */}
          <div className="right-container">
            <div className="suggestion-bar-container">
            <BookmarksIcon className='bookmark-icon' />
            <label className='text-all-suggestions'>Toutes les suggestions</label>
            <label className='text-saved'>Enregistrées</label>
            <label className='text-draft'>Brouillon</label>
          </div>
            <div className="rectangle-background">
              <div className="rectangle"></div>
            </div>
          <div className="suggestion-filter-container">
            <div className="rectangle-pencil">
              <PencilEditIcon className='penciledit-icon' />
            </div>
            <label className="text-new-suggestion">Nouvelle suggestion</label>
            <FilterIcon className='filter-icon' />
            <label className="text-filter">Filtre:</label>
            <label className="text-a-z">A-Z</label>
            <ArrowDownIcon className='arrow-down-icon' />
            <div className="rectangle-more-menu">
              <MoreIcon className='more-icon' />
              <div className="rectangle-menu">
                <MenuIcon className='menu-icon' />
              </div>
            </div>
          </div>
          <div className="guide-container">
            <div className="rectangle-guide">
              <div className="top-guide-container">
                <label className="text-id-suggestion">Suggestion #2024-577</label>
                <label className="text-time">08:01PM</label>
                <GroupIcon className='group-icon' />
              </div>
              <label className="text-guide-title">Guide 1</label>
              <label className="text-guide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
            </div>
            <div className="rectangle-guide">
              <div className="top-guide-container">
                <label className="text-id-suggestion">Suggestion #2024-577</label>
                <label className="text-time">08:01PM</label>
                <GroupIcon className='group-icon' />
              </div>
              <label className="text-guide-title">Guide 1</label>
              <label className="text-guide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
            </div>
            <div className="rectangle-guide">
              <div className="top-guide-container">
                <label className="text-id-suggestion">Suggestion #2024-577</label>
                <label className="text-time">08:01PM</label>
                <GroupIcon className='group-icon' />
              </div>
              <label className="text-guide-title">Guide 1</label>
              <label className="text-guide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
            </div>
            <div className="rectangle-guide">
              <div className="top-guide-container">
                <label className="text-id-suggestion">Suggestion #2024-577</label>
                <label className="text-time">08:01PM</label>
                <GroupIcon className='group-icon' />
              </div>
              <label className="text-guide-title">Guide 1</label>
              <label className="text-guide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
            </div>
          </div>
          </div>
        </div>
      </div>
      {counter && (
        <Logout></Logout>
        
      )}
    </div>
  );
}

export default Guide;