import React from 'react';
import ActionCard from './ActionCard';
import ConsultasRapidas from './ConsultasRapidas';
import styles from './HomeLogged.module.css'; 

function HomeLogged() {
    return (
      <div className={styles.container}>
        <ConsultasRapidas />
        <div className={styles.actionCards}>
          <div className={styles.promotionText}>
            Ahorre a lo grande en exportaciones al enviar por Internet
          </div>
          <ActionCard
            title="Con nuestras membresías tendrás descuentos en todos tus envíos."
            actionText="Ver membresías"
            onActionClick={() => console.log("Ver membresías clickeado")}
            backgroundColor="#FFA726"  
          />
        </div>
      </div>
    );
  }

export default HomeLogged;

