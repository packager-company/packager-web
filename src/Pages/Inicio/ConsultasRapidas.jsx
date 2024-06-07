import React from 'react';
import styles from './ConsultasRapidas.module.css';

function ConsultasRapidas() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Consultas Rápidas</h1>
        <div className={styles.buttonsContainer}>
            <button className={styles.button}>Rastrear mi pedido</button>
            <button className={styles.button}>Historial de pedidos</button>
            <button className={styles.button}>Cotizar nuevo envío</button>
            <button className={styles.button}>Servicio al cliente</button>
        </div>
    </div>
  );
}

export default ConsultasRapidas;
