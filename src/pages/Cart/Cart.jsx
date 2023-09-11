import styles from './Cart.module.sass'
import CartItem from './CartItem.jsx'
import EmptyBag from '../EmptyBag/EmptyBag'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {clearItems} from '../../redux/slices/CartSlice'
const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    if(totalPrice === 0){
        return <EmptyBag/>
    }
    return (
        <div className={styles.cart}>
            <div className={styles.cart__title}>
                <div>
                    <img src="img/shopping-basket.png"></img>
                    <h1>Корзина</h1>
                </div>
                <button onClick={() => dispatch(clearItems())}>Очистить корзину</button>
            </div>
            <ul>
                {items.map((item, i)=> (
                    <CartItem {...item} key={i} />
                ))}
            </ul>
            <div className={styles.cart__footer}>
                <div>
                    <h2>Всего: <b>{totalCount} шт</b></h2>
                    <h2>Сумма заказа: <b>{totalPrice} ₽</b></h2>
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