import styles from '../styles/Header.module.sass'
import Search from './Search'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Header = () => {
    const {items, totalPrice} = useSelector(state => state.cart)
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src="img/header-icon.svg"></img>
            </Link>
            <Search/>
            <Link to="/cart">
            <div className={styles.bag}>
                <h3>{totalPrice}₽</h3>
                <div>
                    <img src="img/shopping-bag.svg"></img>
                    <p>{items.length}</p>
                </div>
            </div>
            </Link>
        </header>
    )
}

export default Header