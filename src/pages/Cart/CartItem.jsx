import styles from './CartItem.module.sass'
const CartItem = () => {
    return (
        <li className={styles.cartItem}>
            <div className={styles.cartItem__item}>
                <img src='https://img.mvideo.ru/Big/30063534bb.jpg'></img>
                <div>
                    <h2>IPhone 14 Pro Max</h2>
                    <p>256GB</p>
                </div>
            </div>
            <div className={styles.cartItem__btn}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
                <h2>89760 ₽</h2>
                <button>x</button>
        </li>
    )
}
export default CartItem