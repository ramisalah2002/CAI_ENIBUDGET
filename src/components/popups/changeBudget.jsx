import React from 'react';
import './changebudget.css';
import CloseIcon from "../CloseIcon"
function ChangeBudget() {
  return (
    <div className='popup-overlay'>
    <div className="popup">
        <div className='top-popup'>
            <label className="text-budget">Changer le budget mensuel</label>
            <CloseIcon className='close-icon' />
        </div>
        <div className='space'></div>
        <div className='bot-popup'>
            <div className='rectangle-input'>
                <input
                    type="number"
                    className="input-money"
                    placeholder="40.00"
                    step="1"
                    min="0"
                />
                <span className="currency-symbol">€</span>
            </div>
            <div className='rectangle-save'>
                <label className="text-save">Enregistrer</label>
            </div>
        </div>
    </div>
</div>
  );
}

export default ChangeBudget;