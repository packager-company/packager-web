import React from 'react';
import styles from './styles/Monitoring.module.css';
import OrderDetails from './Components/OrderDetails';
//import { changeColor } from './functions/function';


const Monitoring = () => {
  /*const [colorValue, setColorValue] = useState(0);

  const handleChangeColor = () => {
    changeColor('linecar', 'ccar', 'lineemp', 'cremp', 'linerun', 'crun', 'lineofi', 'cofi', 'lineho', 'cho', 'lineres', 'cres', 'crunn', colorValue);
  };*/

  return (
    <div>
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
          </div>
            
          <div className={styles.recorrido}>
            <div className={styles.stepContainercar}>
            <div className={styles.textContainercar}>
            <p className={styles.pcar}>Pagado</p>
            </div>
              <div className={styles.iconContainer} id='ccar'>
                <i className={`${styles.icon} fas fa-shopping-cart`} />
              </div>
              <div className={styles.linecar} id='linecar'></div>
            </div>
            <div className={styles.stepContaineremp}>
              <div className={styles.iconContainer} id='cremp'>
                <i className={`${styles.icon} fas fa-box`} />
              </div>
              <div className={styles.lineemp} id='lineemp'></div>
              <div className={styles.textContaineremp}>
              <p className={styles.pemp}>Empaquetado</p></div>
            </div>
            <div className={styles.stepContainerrun}>
            <div className={styles.textContainerrun}>
            <p className={styles.prun}>En ruta</p>
            </div>
              <div className={styles.iconContainer} id='crun'>
                <i className={`${styles.icon} fas fa-truck`} />
              </div>
              <div className={styles.linerun} id='linerun'></div>
             
            </div>
            <div className={styles.stepContainerofi}>
              <div className={styles.iconContainer} id='cofi'>
                <i className={`${styles.icon} fas fa-building`} />
              </div>
              <div className={styles.lineofi} id='lineofi'></div>
              <div className={styles.textContainerofi}>
              <p className={styles.pofi}>En oficina</p></div>
            </div>
            <div className={styles.stepContainerho}>
            <div className={styles.textContainerho}>
             <p className={styles.pho}>Entregado</p>
             </div>
              <div className={styles.iconContainer} id='cho'>
                <i className={`${styles.icon} fas fa-home`} />
              </div>
              <div className={styles.lineho} id='lineho'></div>
            </div>
            <div className={styles.stepContainerres}>
              <div className={styles.iconContainer} id='cres'>
                <i className={`${styles.icon} fas fa-sync-alt`} />
              </div>
              <div className={styles.lineres} id='lineres'></div>
              <div className={styles.textContainerres}>
              <p className={styles.pres}>Re-programado</p></div>
            </div>
            <div className={styles.stepContainerunn}>
            <div className={styles.textContainerunn}>
            <p className={styles.pun}>Devuelto</p>
            </div>
              <div className={styles.iconContainer} id='crunn'>
                <i className={`${styles.icon} fas fa-undo`} />
              </div>
              <div className={styles.lineun} id='lineun'></div>
            </div>
            
            </div>
            
          </div>
        </div>

      
    </div>
  );
};

export default Monitoring;
