import { Link, Outlet } from 'react-router-dom'
import styles from './styles.module.css'

export default function Root() {
    return (
        <div id={styles.main}>
            <div id={styles.sideBar}>
                <h1>Rutas</h1>

                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/memberships">Membresias</Link>
                        </li>
                        <li>
                            <Link to="/payments">Pagos</Link>
                        </li>
                        <li>
                            <Link to="/price">Precios</Link>
                        </li>
                        <li>
                            <Link to="/shiptment-history">Historial de envios</Link>
                        </li>
                        <li>
                            <Link to="/create-shipment">Nuevo envío</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id={styles.content}><Outlet /></div>
        </div>
    )
}