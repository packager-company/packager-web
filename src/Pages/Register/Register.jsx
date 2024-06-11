import React from 'react';
import styles from './Register.module.css';
import Logo from "../../assets/logo.jpeg"
import icon from "../../assets/iconregister.png"
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" className={styles.logo}/>
      </div>

      <div className={styles.registerContainer}>
        <h2>Registrarse</h2>
        <form>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="phone">Teléfono:</label>
            <input type="text" id="phone" name="phone" required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
                  <button type="submit" className={styles.registerButton}>
                    <img src={icon} alt="Logo" className={styles.buttonIcon} />
                  </button>
                  <div className={styles.loginContainer}>
                    <span>¿Ya tienes una cuenta?</span> <a href="/iniciar sesión">Iniciar sesión</a>
                  </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
