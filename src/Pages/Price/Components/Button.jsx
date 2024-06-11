import React from 'react'
import style from '../price.module.css'

function Button(props) {
  return (
    <button className={style.btn}>{props.text}</button>
  )
}

export default Button
