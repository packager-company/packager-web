import React from 'react';
import './PaymentModal.css';
import tarjetaImage from '../assets/tarjeta.png';
import escudoImage from '../assets/escudo.png';

const PaymentModal = ({ onClose }) => {
    return (
      <div className="payment-modal-overlay">
        <div className="payment-modal-content">
          <h2>Adquirir membresía <img src={tarjetaImage} alt="Tarjeta" className="payment-tarjeta-image" /></h2>
          <h3>Pagar con tarjeta</h3>
          <div className="payment-secure-info">
            <img src={escudoImage} alt="Escudo" className="payment-escudo-image" />
            <div className="secure-info-text">
              <p>La información de tu tarjeta está protegida.</p>
              <p>Trabajamos con EBANX para asegurar que tus datos bancarios estén protegidos. 90 minutos no tendrá acceso a la información de tu tarjeta.</p>
            </div>
          </div>
          <div className="payment-card-details">
            <input type="text" placeholder="Número de tarjeta" />
            <div className="payment-card-expiry-cvv">
              <input type="text" placeholder="Fecha de vencimiento (MM/YY)" />
              <input type="text" placeholder="CVV" />
            </div>
            <input type="text" placeholder="Nombre en la tarjeta" />
          </div>
          <div className="payment-modal-buttons">
            <button onClick={onClose}>Cancelar</button>
            <button>Aceptar</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PaymentModal;