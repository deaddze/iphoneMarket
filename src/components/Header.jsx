import styles from '../styles/Header.module.sass'
import Search from './Search'
const Header = () => {
    return (
        <header className={styles.header}>
            <img src="img/header-icon.svg"></img>
            <Search/>
            <div className={styles.bag}>
                <img src="img/shopping-bag.png"></img>
            </div>
        </header>
    )
}

export default Header