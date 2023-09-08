import styles from './Cart.module.sass'
import CartItem from './CartItem.jsx'
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
        </div>
    )
}
export default Cart