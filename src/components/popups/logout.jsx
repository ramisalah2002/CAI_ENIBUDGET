import React from 'react';

import './logout.css';

function Logout() {
    return (
      <div className="popup-overlay">
        <div className="popup">
          <label className="text-ask-disconnect">
            Voulez-vous vraiment vous déconnecter ?
          </label>
          <div className="button-container">
            <div className="rectangle-cancel">
              <label className="text-cancel">Annuler</label>
            </div>
            <div className="rectangle-confirm">
              <label className="text-confirm">Confirmer</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Logout;