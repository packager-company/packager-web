import React from 'react'
import style from './price.module.css'
import Card from './Components/Card'
import Button from './Components/Button'

//className={style.}

function Price() {
    return (
        <div className={style.containerPrice}>
            <div className={style.divcontainer}>
                <div className={style.divdatacontainerprice}  >
                    <div className={style.divtitleprice}>
                        <p className={style.titleprice}>Tarifas y tiempos</p>
                    </div>

                    <form action=''>
                        <div className={style.sectiondata} >
                            <div>
                                <label className={style.txtform} htmlFor="">Dirección de Origen</label>
                                <input className={style.inputform} type="text" />
                            </div>

                            <div >
                                <label className={style.txtform} htmlFor="">Dirección de Destino</label>
                                <input className={style.inputform} type="text" />
                            </div>
                        </div>

                        <div className={style.divdataprice}>
                                <label className={style.txtform} htmlFor="">Peso del Paquete (kg)</label>
                                <input className={style.inputform2} type="text" />

                        </div>

                        <div className={style.divbtn}>
                            <Button text='Cotizar' />
                        </div>
                    </form>

                    <Card 
                    data1 = '3'
                    data2 = '30'
                    data3 = '1203'
                    data4 = '120'
                    data5 = '30'
                    data6 = ''
                    />

                    <div className={style.divbtn}>
                        <Button text='Recalcular' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
