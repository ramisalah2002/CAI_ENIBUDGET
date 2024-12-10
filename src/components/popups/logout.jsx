import React from 'react';
import './logout.css';
import { Link, useNavigate } from "react-router-dom";



function Logout({ onCancel, onConfirm }) {

  const navigateTo = useNavigate();
    return (
      <div className="popup-overlay">
      <div className="popup-container">
        <p className="popup-message">Voulez-vous vraiment se déconnecter ?</p>
        <div className="popup-buttons">
          <button className="cancel-button" onClick={onCancel}>
            Annuler
          </button>
          <button className="confirm-button" onClick={()=>{navigateTo("../Login")}}>
            Confirmer
          </button>
        </div>
      </div>
    </div>
    );
  }
  
  export default Logout;