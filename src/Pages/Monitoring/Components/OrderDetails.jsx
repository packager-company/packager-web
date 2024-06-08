import React from 'react';
import styles from '../styles/OrderDetails.module.css';

const OrderDetails = () => {
  return (
    <div className={styles.orderDetailsContainer}>
      <h3>Detalles de pedido</h3>
      <p><strong>Nombre del usuario:</strong> José</p>
      <p><strong>Ciudad:</strong> México</p>
      <p><strong>Estado:</strong> Chiapas</p>
      <p><strong>Dirección:</strong> Solidaridad</p>
      <p><strong>Código postal:</strong> 30479</p>
      <p><strong>Fecha:</strong> 11/11/2023</p>
      <p><strong>Estatus:</strong> Pagado</p>
    </div>
  );
};

export default OrderDetails;
