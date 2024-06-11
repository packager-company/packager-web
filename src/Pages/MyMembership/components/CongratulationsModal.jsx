import React from 'react';
import './CongratulationsModal.css';
import felizImage from '../assets/fiesta.png'; 

const CongratulationsModal = ({ onClose }) => {
  return (
    <div className="congrats-modal-overlay">
      <div className="congrats-modal-content">
        <h2>¡Felicidades! 🎉</h2>
        <p>Tu membresía ha sido activada.<br/>¡Bienvenido a nuestra comunidad!</p>
        <img src={felizImage} alt="Feliz" className="congrats-feliz-image" />
        <button onClick={onClose}>¡Enhorabuena!</button>
      </div>
    </div>
  );
};

export default CongratulationsModal;
