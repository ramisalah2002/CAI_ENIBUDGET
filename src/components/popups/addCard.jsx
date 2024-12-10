import React from 'react';
import './AddCard.css';

function AddCard({ onClose }) { 
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2 className="popup-title">Ajouter carte</h2>
        <p className="popup-subtitle">Entrer les infos de la carte</p>
        <form className="popup-form">
          <div className="form-group">
            <label htmlFor="cardName">Nom sur la carte</label>
            <input type="text" id="cardName" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Numéro de la carte</label>
            <input type="text" id="cardNumber" className="form-input" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Date d’expiration</label>
              <input type="date" id="expiryDate" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="cardBalance">Solde de la carte</label>
              <input type="text" id="cardBalance" className="form-input" />
            </div>
          </div>
          <button type="submit" className="submit-button">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}

export default AddCard;
