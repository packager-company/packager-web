import React from 'react';
import styles from '../../styles/SubscriptionInfo.module.css';

const SubscriptionInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Información de mi suscripción</h2>
      <p>Gestiona tu plan de suscripción y tu historial de pedidos</p>
      <div className={styles.membership}>
        <div className={styles.plan}>
          <span role="img" aria-label="crown">👑</span> Miembro Fan
        </div>
        <div className={styles.price}>$ 100 MXN / mensual + impuestos aplicables</div>
        <div className={styles.renewal}>Tu suscripción se renovará el 3 de Septiembre de 2023</div>
      </div>
      <button className={`${styles.button} ${styles.upgrade}`}>Mejora suscripción</button>
      <button className={`${styles.button} ${styles.cancel}`}>Cancelar suscripción</button>
    </div>
  );
}

export default SubscriptionInfo;
