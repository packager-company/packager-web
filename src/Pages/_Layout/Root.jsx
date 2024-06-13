import { Link, Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Line from '../../Components/Line'


export default function Root() {
    return (
        <div >
            <Header/>
            <Line/>
            <div id={styles.content}><Outlet /></div>
            <Footer/>
        </div>
    )
}