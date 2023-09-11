import styles from './Cart.module.sass'
import CartItem from './CartItem.jsx'
import {Link} from 'react-router-dom'
const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.cart__title}>
                <div>
                    <img src="img/shopping-basket.png"></img>
                    <h1>Корзина</h1>
                </div>
                <button>Очистить корзину</button>
            </div>
            <ul>
                <CartItem/>
            </ul>
            <div className={styles.cart__footer}>
                <div>
                    <h2>Всего: <b>1</b></h2>
                    <h2>Сумма заказа: <b>900 ₽</b></h2>
                </div>
                <div>
                    <Link to="/">
                    <button>Вернуться назад</button>
                    </Link>
                    <button>Оплатить сейчас</button>
                </div>
            </div>
        </div>
    )
}
export default Cart