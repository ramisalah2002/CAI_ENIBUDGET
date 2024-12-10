import React from 'react';
import './AddExpense.css';

function AddExpence(onClose) {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2 className="popup-title">Ajouter dépense</h2>
        
        <form className="popup-form">
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <div className="input-wrapper">
                <input type="date" id="expiryDate" className="form-input" />  
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="amount">Montant</label>
              <input type="text" id="amount" placeholder="£46" className="form-input"  />
            </div>
          </div>
          <div className='divider'></div>
          <div className="form-section categories-section">
            <label>Catégorie</label>
            <div className="categories">
              <div className="category-icon food"></div>
              <div className="category-icon shopping"></div>
              <div className="category-icon transport"></div>
              <div className="category-icon bills"></div>
              <div className="category-icon health"></div>
              <div className="category-icon more">...</div>
            </div>
          </div>
        </form>
          <div className="action-buttons">
            <button type="submit" className="add-button">Ajouter</button>
            <button type="button" className="cancel-button" onClick={onClose}>Annuler</button>
          </div>
      </div>
    </div>
  );
}

export default AddExpence;