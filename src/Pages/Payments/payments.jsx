import React from 'react';
import styles from './payments.module.css';

function Payments() {
  return (
    <div className={styles.container}>
      
      
      <main className={styles.mainContent}>
        <section className={styles.deliveryInfo}>
        <h2 className={styles.title}>Dirección de entrega:</h2>
          <div className={styles.address}>
            <p className={styles.name}>John Doe</p>
            <p className={styles.phone}>+1 (xxx) xxx-xx-xx</p>
            <p className={styles.addressDetails}>215 E Tasman Dr, Po Box 65502, CA 95134 San Jose</p>
            <div className={styles.buttons}>
              <button className={styles.defaultBtn}>Predeterminado</button>
              <button className={styles.changeBtn}>Cambiar</button>
            </div>
          </div>
        </section>
        

        
        <section className={styles.orderDetails}>
          <h2>Productos pedidos:</h2>
          <div className={styles.product}>
  <div className={styles.productImage}>[Imagen]</div>
  <div className={styles.productInfo}>
    <div className={styles.productDetails}>
      <div className={styles.priceInfo}>
        <p>Precio: $XX.XX</p>
        <p>Cantidad: $XX.XX</p>
        <p>Subtotal: $XX.XX</p>
      </div>
    </div>
  </div>
</div>

          <div className={styles.orderSummary}>

          </div>
          <div><p className={styles.descuento}>Descuento:$XX.XX</p></div>
          <div><p className={styles.tipo}>Tipo de envío: Camiones</p></div>
          <div><p className={styles.total}>Total del envío (x artículos): <span className={styles.totalAmount}>$XX.XX</span></p></div>

        </section>



        
        <section className={styles.paymentMethod}>
          <div><h2 className={styles.metodo}>Método de pago:</h2></div>
          
          <div className={styles.paymentBtnContainer}>
         
          </div>

          <div className={styles.selectAccount}>
           <div className={styles.bbva}>
            <label>
              <input type="radio" name="account" />
              <img src="visa.png" alt="Visa" />
              BBVA
            </label>
            </div>
            <div className={styles.azteca}>
            <label>
              <input type="radio" name="account" />
              <img src="mastercard.png" alt="Mastercard" />
              BANCO AZTECA
            </label>
            </div>
            <button className={styles.addCardBtn}>Agregar Tarjeta</button>
          </div>
        </section>
        

        
        <section className={styles.orderSummaryFooter}>
          <div className={styles.summaryDetails}>

          </div>
          <div><p className={styles.sub}>Subtotal del producto: $XX.XX</p></div>
            <div><p className={styles.tot}>Total del envío: $XX.XX</p></div>
            <p className={styles.totalFooter}>Total del envío (x artículos): <span className={styles.totalAmount}>$XX.XX</span></p>

          <button className={styles.orderBtn}>Realizar Pedido</button>
        </section>
      </main>
      
      
    </div>
  );
}

export default Payments;
