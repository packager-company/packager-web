import React from 'react'
import style from '../price.module.css'

function Card(props) {
  return (
    <div className={style.containercard} >
        <p className={style.txtcard}>Tiempo estimado: {props.data1} días</p>
        <p className={style.txtcard}>Distancia estimada: {props.data2}km</p>
        <p className={style.txtcard}>Costo base: ${props.data3}MXN</p>
        <p className={style.txtcard}>Cargo adicional por excendente: ${props.data4}MXN</p>
        <p className={style.txtcard}>Descuento aplicado: {props.data5}%</p>
        <p className={style.txtcard}>Costo total: $ {props.data6}MXN</p>
        <p className={style.txtcard2}>Nota: Este precio es estimado. El costo total se calculará al momento de   confirmar el envío</p>
    </div>
  )
}

export default Card
