import React from 'react';
import styles from '../styles/Header.module.css';
import Logo from "../assets/logo.jpeg";

function Header() {
  return (
    <div className={styles.contHeader}>
      <div className={styles.contLogo}>
        <img className={styles.logoImage} src={Logo} alt="Logo" />
      </div>
      <div className={styles.contSearch}>
        <ion-icon name="search-outline"></ion-icon>
        <input type='search' placeholder='Buscar...' />
      </div>
      <div className={styles.contIcons}>
        <ion-icon name="search-sharp"></ion-icon>
        <ion-icon name="notifications-sharp"></ion-icon>
      </div>
    </div>
  );
}

export default Header;
