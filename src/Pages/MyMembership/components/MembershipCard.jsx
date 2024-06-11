import React, { useState } from 'react';
import './MembershipCard.css';
import checkImage from '../assets/check.png';
import CongratulationsModal from './CongratulationsModal';
import PaymentModal from './PaymentModal';

const MembershipCard = ({ title, price, discount }) => {
  const [showCongratulationsModal, setShowCongratulationsModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleAcquireClick = () => {
    if (title === "Mensual") {
      setShowCongratulationsModal(true);
    } else if (title === "Anual") {
      setShowPaymentModal(true);
    }
  };

  const closeModal = () => {
    setShowCongratulationsModal(false);
    setShowPaymentModal(false);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <img src={checkImage} alt="Check" className="check-image" />
      <p className="discount">Descuento: {discount}</p>
      <button onClick={handleAcquireClick}>Adquirir</button>
      {showCongratulationsModal && <CongratulationsModal onClose={closeModal} />}
      {showPaymentModal && <PaymentModal onClose={closeModal} />}
    </div>
  );
};

export default MembershipCard;
