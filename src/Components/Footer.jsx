import React from 'react';
import styles from '../styles/footer.module.css';
import Logo from "../assets/Image/logoTransparent.png";

function Footer() {
  return (
    <div className={styles.contFooter}>
      <div className={styles.Contlogo}>
        <img className={styles.logoImage} src={Logo} alt="Logo" />
      </div>
      <div className={styles.ContTitle}>
        <div className={styles.ContPolicy}>
          <p>Política de privacidad</p>
          <p>Política de uso</p>
        </div>
        <p>Todos los derechos reservados</p>
      </div>
      <div className={styles.ContIcons}>
        <ion-icon name="logo-whatsapp"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
      </div>
    </div>
  );
}

export default Footer;
