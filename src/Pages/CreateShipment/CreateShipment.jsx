import React from 'react'
import Style from './Shipment.module.css'
import Btn from './Components/btnShipment'
import paquete from '../../assets/Image/package.png'

function CreateShipment() {
    return (
        <div className={Style.containerShipment} >
            <div className={Style.divcontainer}>
                <div className={Style.divcontainerImg}>
                    <img className={Style.img} src={paquete} alt="" />
                </div>

                <div className={Style.divcontainerform}>

                    <div className={Style.containerform}>
                        <div className={Style.divtitleshipment}>
                            <p className={Style.titleform}>Crear envío</p>
                        </div>


                        <form action="">
                            <div className={Style.divdatashipment}>
                                <label className={Style.txtform} htmlFor="">Dirección de Origen</label>
                                <input className={Style.inputform} type="text" />
                            </div>

                            <div className={Style.divdatashipment}>
                                <label className={Style.txtform} htmlFor="">Dirección de Destino</label>
                                <input className={Style.inputform} type="text" />
                            </div>

                            <div className={Style.divdatashipment}>
                                <label className={Style.txtform} htmlFor="">Dimensiones del Paquete (cm)</label>
                                <input className={Style.inputform} type="text" />
                            </div>

                            <div className={Style.divdatashipment}>
                                <label className={Style.txtform} htmlFor="">Peso del Paquete (kg)</label>
                                <input className={Style.inputform} type="text" />
                            </div>

                            <div className={Style.divdatashipment}>
                                <label className={Style.txtform} htmlFor="">Tipo de Envío</label>
                                <input className={Style.inputform} type="text" />
                            </div>

                            <div className={Style.divdatashipment}>
                                <label className={Style.txtform} htmlFor="">Costo Total</label>
                                <input className={Style.inputform} type="text" />
                            </div>

                            <div className={Style.divbtn}>
                                <Btn text='Enviar' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateShipment;
