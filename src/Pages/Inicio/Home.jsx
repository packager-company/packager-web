import React from 'react';
import ActionCard from './ActionCard';
import ConsultasRapidas from './ConsultasRapidas';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <ConsultasRapidas />
      <div className={styles.actionCards}>
        <ActionCard
          title="Obtén un 70% de descuento en tu primer envío"
          actionText="Regístrate"
          onActionClick={() => console.log("Registrarse clickeado")}
          backgroundColor="#e53935"
        />
        <ActionCard
          title="Con nuestras membresías tendrás descuentos en todos tus envíos."
          actionText="Ver membresías"
          onActionClick={() => console.log("Ver membresías clickeado")}
          backgroundColor="#FF5722"
        />
      </div>
    </div>
  );
}

export default Home;

