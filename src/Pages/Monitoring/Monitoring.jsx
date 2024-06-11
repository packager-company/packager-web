import React from 'react';
import styles from './styles/Monitoring.module.css';
import OrderDetails from './Components/OrderDetails';

const Monitoring = () => {
  return (
    <div>
      <div className={styles.header}>Header</div>
      <div className={styles.ord}><OrderDetails /></div>

      <div className={styles.monitoringContainer}>
        <div className={styles.mainContent}>
          <label className={styles.number}>Ingrese el número de rastreo</label>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Ingrese el número de rastreo"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Buscar</button>
          </div>
          <div className={styles.statusContainer}>
            <h2 className={styles.statusTitle}>
              Estatus: <span className={styles.status}>Empaquetando</span>
            </h2>
            <div className={styles.stepContainercar}>
            <div className={styles.textContainercar}>
            <p className={styles.pcar}>Pagado</p>
            </div>
              <div className={styles.iconContainer}>
                <i className={`${styles.icon} fas fa-shopping-cart`} />
              </div>
              <div className={styles.linecar}></div>
            </div>
            <div className={styles.stepContaineremp}>
              <div className={`${styles.iconContainer} ${styles.current}`}>
                <i className={`${styles.icon} fas fa-box`} />
              </div>
              <div className={styles.lineemp}></div>
              <p className={styles.pemp}>Empaquetado</p>
            </div>
            <div className={styles.stepContainerrun}>
            <div className={styles.textContainerrun}>
            <p className={styles.prun}>En ruta</p>
            </div>
              <div className={styles.iconContainer}>
                <i className={`${styles.icon} fas fa-truck`} />
              </div>
              <div className={styles.linerun}></div>
             
            </div>
            <div className={styles.stepContainerofi}>
              <div className={styles.iconContainer}>
                <i className={`${styles.icon} fas fa-building`} />
              </div>
              <div className={styles.lineofi}></div>
              <p className={styles.pofi}>En oficina</p>
            </div>
            <div className={styles.stepContainerho}>
            <div className={styles.textContainerho}>
             <p className={styles.pho}>Entregado</p>
             </div>
              <div className={styles.iconContainer}>
                <i className={`${styles.icon} fas fa-home`} />
              </div>
              <div className={styles.lineho}></div>
            </div>
            <div className={styles.stepContainerres}>
              <div className={styles.iconContainer}>
                <i className={`${styles.icon} fas fa-sync-alt`} />
              </div>
              <div className={styles.lineres}></div>
              <p className={styles.pres}>Re-programado</p>
            </div>
            <div className={styles.stepContainerun}>
            <div className={styles.textContainerun}>
            <p className={styles.pun}>Devuelto</p>
            </div>
              <div className={styles.iconContainer}>
                <i className={`${styles.icon} fas fa-undo`} />
              </div>
              <div className={styles.lineun}></div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Monitoring;
