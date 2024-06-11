import React from 'react';
import styles from './login-admin.module.css';
import logo from '/src/assets/logo.jpeg';
import icon from '/src/assets/iconlogin.png';

const LoginAdmin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.loginContainer}>
        <h2>Iniciar sesión</h2>
        <form>
          <div className={styles.inputContainer}>
            <label>Correo electrónico:</label>
            <input type="email" />
          </div>
          <div className={styles.inputContainer}>
            <label>Contraseña:</label>
            <input type="password" />
          </div>
          <button type="submit" className={styles.loginButton}>
            <img src={icon} alt="Logo" className={styles.buttonIcon} />
          </button>
        </form>
        <div className={styles.registerContainer}>
          <span>¿No tienes una cuenta?</span> <a href="/register">Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
