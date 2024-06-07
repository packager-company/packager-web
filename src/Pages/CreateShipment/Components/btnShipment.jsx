import React from 'react'
import style from '../Shipment.module.css'

const btnShipment = (props) => {
  return (
    <button className={style.btnsend}>{props.text}</button>
  )
}

export default btnShipment
