import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from "../components/Chart";
import Logout from "../components/popups/Logout";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

import './test1.css';
import GridViewIcon from '@mui/icons-material/GridView';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NorthIcon from '@mui/icons-material/North';

function Accueil() {

  const navigateTo = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("par semaine");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = ["par semaine", "par mois", "par an"];

  const [counter, setCounter] = useState(false);
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); 
  };

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

  return (
    <div className='main-container'>
      <div className='sidebar'>
        <div className='sidaber-top'>
          <label className='logo-label'>Enibudget</label>
          <ul className='nav-links'>
            <li className='nav-link nav-selected'><GridViewIcon className='' color="black" />Accueil</li>
            <li className='nav-link other-link' onClick={handleCartesClick}><CreditCardIcon className='other-icon' color="" />Cartes</li>
            <li className='nav-link other-link' onClick={handleActivitesClick}><SignalCellularAltIcon className='other-icon' color="" />Activités</li>
            <li className='nav-link other-link' onClick={handleGuideClick}><InfoIcon className='other-icon'  color="" />Guide</li>
            <li className='nav-link other-link' onClick={handleProfileClick}><SettingsIcon className='other-icon'  color="" />Profile</li>
          </ul>
        </div>
        <div className='sidebar-bottom'>
          <div className='logout-line'></div>
          <div>
            <i className='logout-btn'onClick={handleLogoutClick}><LogoutIcon className='logout-icon'  color="black" />Deconnexion</i>
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
        <div className='home-body'>
          <div className='left-body'>
            <div className='my-cards-container'>
              <div className='my-cards-header'>
                <label className='my-cards-title'>Mes cartes</label>
                <button className='add-card-btn'>
                + Ajouter Nouvelle carte</button>
              </div>
              <div className='my-cards-info-container'>
                <div className='my-card-background'>
                  <div className='my-card-back-header'>
                    <div className='eclipse eclipse1'></div>
                    <div className='eclipse eclipse2'></div>
                  </div>
                  <div className='my-card-back-bottom'>
                    <div className='card-number'>xxxx xxxx xxxx 1234</div>
                    <div className='card-holder-date'>
                      <label className='card-holder'>SOTIH Amine</label>
                      <label className='card-date'>09/26</label>
                    </div>
                  </div>
                </div>
                <div className='card-info-section'>
                  <label className='montant-dispo-label'>Montant disponible</label>
                  <h1 className='montant-dispo'>€536.80</h1>
                  <div className='solde-limit-container'>
                    <div className='solde-container'>
                      <label>Solde de la carte</label>
                      <label className='montant-text'>€459.90</label>
                    </div>
                    <div className='limit-container'>
                      <label>Limite de la carte</label>
                      <label className='montant-text'>€459.90</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats-container">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold">Statistiques</h2>
                <div className="flex items-center space-x-4">

                  <div className="flex items-center">
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: "#4b5bbe" }}
                    ></span>
                    <span className="ml-2 text-sm">Entrant</span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: "#e84f16" }}
                    ></span>
                    <span className="ml-2 text-sm">Sortant</span>
                  </div>

                  {/* Dropdown */}
                  <div className="relative">
                    <button
                      className="option-btn flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
                      onClick={() => setDropdownOpen((prev) => !prev)}
                    >
                      {selectedOption}{" "}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute right-0 z-10 w-32 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {options.map((option) => (
                          <button
                            key={option}
                            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                            onClick={() => handleOptionSelect(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Chart />
            </div>
          </div>
          <div className='right-body'>
            <div className='balance-container'>
              <div className='card-balances current-balance'>
                <div className='drawn-icon'>
                  <div className="rect2-div"></div>
                  <div className="rect1-div">
                    <div className="rect3-div"></div>
                    <div className="rect4-div"></div>
                  </div>
                </div>
                <label className="balances-text">Solde actuel</label>
                <label className="balances-money"><p>€</p><label style={{color: "#0065F9"}}>456.78</label></label>
              </div>
              <div className='card-balances total-expenses'>
                <div className='drawn-icon'>
                    <div className="rect5-div">
                      <NorthIcon className='arrow-balance-icon'/>
                    </div>
                </div>
                <label className="balances-text">Total dépenses</label>
                <label className="balances-money"><p>€</p>456.78</label>
              </div>
              <div className='card-balances total-income'>
                <div className='drawn-icon'>
                  <div className="rect6-div">
                    <NorthIcon className='arrow-balance-icon green-arrow'/>
                  </div>
                </div>
                <label className="balances-text">Total revenus</label>
                <label className="balances-money"><p>€</p>456.78</label>
              </div>
            </div>
            <div className='expense-container'>
              
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


export default Accueil;
