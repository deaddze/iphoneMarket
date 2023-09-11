import styles from '../styles/Card.module.sass'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../redux/slices/CartSlice'
const Card = ({id, imageUrl, name, sizes, price, category}) => {
    const dispatch = useDispatch();
    const [activeSize, setActiveSize] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const onClickAdd = () => {
        setCount(count + 1)
        const item = {
            id,
            name,
            price, 
            imageUrl,
            size: activeSize,
        };
        dispatch(addItem(item))
    }
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                {count > 0 && <h2>{count}</h2>}
                <img src={imageUrl}></img>
                <div>
                    {sizes.map((size, i) => (
                        <p key={i} onClick={() => setActiveSize(size)}>{size}GB</p>
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