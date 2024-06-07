import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

export default function Root() {
    return (
        <div id={styles.main}>
            <div id={styles.sideBar}>
                <h1>Rutas</h1>

                <nav>
                    <ul>
                        <li>
                            <a href={`/memberships`}>Membresias</a>
                        </li>
                        <li>
                            <a href={`/price`}>Precios</a>
                        </li>
                        <li>
                            <a href={`/payments`}>Metodos de pago</a>
                        </li>
                        <li>
                            <a href={`/shiptment-history`}>Historial de envios</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id={styles.content}><Outlet /></div>
        </div>
    )
}