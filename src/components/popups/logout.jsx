import React from 'react';
import './logout.css';

function Logout({ onCancel, onConfirm }) {
    return (
      <div className="popup-overlay">
      <div className="popup-container">
        <p className="popup-message">Voulez-vous vraiment se déconnecter ?</p>
        <div className="popup-buttons">
          <button className="cancel-button" onClick={onCancel}>
            Annuler
          </button>
          <button className="confirm-button" onClick={onConfirm}>
            Confirmer
          </button>
        </div>
      </div>
    </div>
    );
  }
  
  export default Logout;