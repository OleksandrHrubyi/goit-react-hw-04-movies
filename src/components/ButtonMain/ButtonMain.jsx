import styles from '../ButtonMain/buttonMain.module.css'
import {NavLink} from 'react-router-dom';


function ButtonMain ({name, path}){
   return <NavLink exact to ={path} className ={styles.base} activeClassName ={styles.active}><button className ={styles.btn} type ="button">{name}</button></NavLink>
}

export default ButtonMain

