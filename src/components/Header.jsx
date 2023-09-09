import styles from '../styles/Header.module.sass'
import Search from './Search'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src="img/header-icon.svg"></img>
            </Link>
            <Search/>
            <Link to="/cart">
            <div className={styles.bag}>
                <img src="img/shopping-bag.png"></img>
            </div>
            </Link>
        </header>
    )
}

export default Header