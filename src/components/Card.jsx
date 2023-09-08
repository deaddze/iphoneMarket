import styles from '../styles/Card.module.sass'
import React from 'react'
const Card = ({imageUrl, name, sizes, price, category}) => {
    const [count, setCount] = React.useState(0)
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <h2>{count}</h2>
                <img src={imageUrl}></img>
                <div>
                    {sizes.map((size, i) => (
                        <p key={i}>{size}GB</p>
                    ))}
                </div>
            </div>
                <h2>{name}</h2>
            <div className={styles.card__price}>
                <h3>от {price} ₽</h3>
                <button onClick={() => setCount(count + 1)}><span>+</span>Добавить</button>
            </div>
        </div>
    )
}
export default Card