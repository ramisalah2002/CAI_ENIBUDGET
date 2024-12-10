import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import StatisticsChart from '../components/Chart';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

import './test.css';
import GridViewIcon from '@mui/icons-material/GridView';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { FaCog, FaTachometerAlt, FaInbox, FaUsers, FaBox } from 'react-icons/fa'; // Import icons from react-icons
import SuiviChart from "../components/SuiviChart";

function Cartes() {
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
    setDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className='main-container-1'>
      <div className='sidebar-1'>
        <div className='sidaber-top-1'>
          <label className='logo-label-1'>Enibudget</label>
          <ul className='nav-links-1'>
            <li className='nav-link other-link' onClick={handleAccueilClick}><GridViewIcon className='' color="black" />Accueil</li>
            <li className='nav-link nav-selected' onClick={handleCartesClick}><CreditCardIcon className='other-icon' color="" />Cartes</li>
            <li className='nav-link other-link' onClick={handleActivitesClick}><SignalCellularAltIcon className='other-icon' color="" />Activités</li>
            <li className='nav-link other-link' onClick={handleGuideClick}><InfoIcon className='other-icon'  color="" />Guide</li>
            <li className='nav-link other-link' onClick={handleProfileClick}><SettingsIcon className='other-icon'  color="" />Profile</li>
          </ul>
        </div>
        <div className='sidebar-bottom-1'>
          <div className='logout-line-1'></div>
          <div>
            <i className='logout-btn-1'><LogoutIcon className='logout-icon'  color="black" />Deconnexion</i>
          </div>
        </div>
      </div>
      <div className='right-container-1'>
        <div className='header-1'>
          <label className='header-title-1'>Cartes</label>
          <div className='right-header-1'>
            <div className='notif-container-1'>
              <NotificationsNoneIcon className='notif-icon'  color="black" />
            </div>
            <div className='user-eclipse-1'></div>
            <label className='user-name-1'>Hugo</label>
          </div>
        </div>
        <div className='home-body-1'>
          <div className='left-body-1'>
            
            <div className="stats-container-1">
              <div className="flex items-center justify-between mb-2-1">
                <h2 className="text-lg font-bold-1"></h2>
                <div className="flex items-center space-x-4-1">
                  <div className="flex items-center-1">
                    <span
                      className="w-4 h-4"
                      style={{ backgroundColor: "#4b5bbe" }}
                    ></span>
                    <span className="ml-2 text-sm-1">carte 2811 </span>
                  </div>
                  <div className="flex items-center-1">
                    <span
                      className="w-4 h-4 "
                      style={{ backgroundColor: "#e84f16" }}
                    ></span>
                    <span className="ml-2 text-sm-1">carte 8728</span>
                  </div>

                  {/* Dropdown */}
                  
                </div>
              </div>
              <SuiviChart />
            </div>
            <div className="cat-budget-1">
              <div className="flex items-center justify-between mb-2-1">
                <h2 className="text-lg font-bold-1">categories budgetaire</h2>
                   
                
              </div>
              <div className="mes-cats-1">
                      <div className="cat-food">

                       </div>
                      <div className="cat-courses">

                       </div>
                      <div className="cat-beaute">

                       </div>

                    </div>
             
            </div>
            
          </div>
          <div className='right-body-1'>
            <div className='my-cards-container-1'>  
                   <div className='my-cards-info-container-1'>
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
                   </div>
                   <div className='my-cards-bottom-1'>
                      <label className='delete-card'>supprimer carte</label>
                      <button className='add-act-btn-1'>
                        Voir rapport</button>
                    </div>
            </div>
            

            <div className='activities-1'>  
              <div className="flex items-center justify-between mb-2-1">
                <div className='my-acts-header-1'>
                  <label className='my-acts-title'>Mes Activites recentes</label>
                  <button className='add-act-btn-1'>
                    Voir rapport</button>
                </div>
              </div>
              



            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


export default Cartes;
