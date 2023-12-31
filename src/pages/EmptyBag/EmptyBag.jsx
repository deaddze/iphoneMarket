import React from 'react'
import styles from './EmptyBag.module.sass'
import {Link} from 'react-router-dom'
const EmptyBag = () => {
  return (
    <div className={styles.emptyBag}>
        <div>
            <h1>Корзина пустая</h1>
            <p>
                Вероятнее всего вы еще не заказывали IPhone <br/>
                Для того, чтобы заказать IPhone, перейди на главную страницу
            </p>
            <img src='img/emptybag.png'></img>
        
            <Link to="/">
                <button>Вернуться назад</button>
            </Link>
        
        </div>
    </div>
  )
}

export default EmptyBag