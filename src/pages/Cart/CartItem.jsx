import styles from './CartItem.module.sass'
import {useDispatch, useSelector} from 'react-redux';
import {removeItem, decrementCount, addItem} from '../../redux/slices/CartSlice'
const CartItem = ({id, name, price, imageUrl, size, count}) => {
    const dispatch = useDispatch();
    if(count > 0){
        return (
            <li className={styles.cartItem}>
                <div className={styles.cartItem__item}>
                    <img src={imageUrl}></img>
                    <div>
                        <h2>{name}</h2>
                        <p>{size}GB</p>
                    </div>
                </div>
                <div className={styles.cartItem__btn}>
                    <button onClick={() => dispatch(decrementCount(id))}>━</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(addItem({id}))}>┿</button>
                </div>
                    <h2>{price * count}₽</h2>
                    <button onClick={() => dispatch(removeItem({id, price, count}))}>✕</button>
            </li>
        )
    }
    return null;
}
export default CartItem