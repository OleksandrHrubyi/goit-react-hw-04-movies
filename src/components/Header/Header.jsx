import styles from '../Header/header.module.css'
import ButtonMain from '../ButtonMain/ButtonMain';

function Header () {
    return <div className ={styles.container}>
        <ButtonMain path ={'/'} name={'Home'}/>
        <ButtonMain path ={'/movies'} name={'Movies'}/>
        </div>
}


export default Header