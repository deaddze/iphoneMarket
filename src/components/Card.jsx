import styles from '../styles/Card.module.sass'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../redux/slices/CartSlice'
const Card = ({id, imageUrl, name, sizes, price, category}) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id));
    const [activeSize, setActiveSize] = React.useState(0);
    const [itemCount, setItemCount] = React.useState(0);

    const addedCount = cartItem ? cartItem.count : 0;
    const onClickAdd = () => {
        setItemCount(itemCount + 1)
        const item = {
            id,
            name,
            price, 
            imageUrl,
            size: sizes[activeSize],
        };
        dispatch(addItem(item))
    }
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                {addedCount > 0 && <h2>{itemCount}</h2>}
                <img src={imageUrl}></img>
                <div>
                    {sizes.map((size, i) => (
                        <p key={i} onClick={() => setActiveSize(i)}>{size}GB</p>
                    ))}
                </div>
            </div>
                <h2>{name}</h2>
            <div className={styles.card__price}>
                <h3>от {price} ₽</h3>
                <button onClick={onClickAdd}><span>+</span>Добавить</button>
            </div>
        </div>
    )
}
export default Card