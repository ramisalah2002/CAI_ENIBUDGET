import React, { useState } from "react";
import "./ChangeBudget.css";
import { Link, useNavigate } from "react-router-dom";

const ChangeBudget = ({ onSave }) => {
  const navigateTo = useNavigate();

  const [budget, setBudget] = useState(40.0);

  const handleInputChange = (event) => {
    setBudget(event.target.value);
  };

  function handleClose(){
    navigateTo('./../../Profile');
  }

  return (

    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <p>Changer le budget mensuel</p>
          <button className="close-button" onClick={handleClose} >
            &times;
          </button>
        </div>
        <div className="popup-divider"></div>
        <div className="popup-content">
          <div className="budget-input-container">
            <span>€</span>
            <input
              type="text"
              className="budget-input"
              value={budget}
              onChange={handleInputChange}
            />
          </div>
          <button className="save-button-popup" onClick={() => onSave(budget)}>
            Enregistrer
          </button>
        </div>
      </div>
    </div>

  );
};

export default ChangeBudget;
