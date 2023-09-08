import styles from '../styles/Sort.module.sass'
import React from 'react'
const Sort = () => {
    const [current, setCurrent] = React.useState('По популярности')
    const [hidden, setHidden] = React.useState(true)
    const categories = ['По популярности', 'По возрастанию', 'По убыванию']
    function currentItem(item){
        setCurrent(item);
        isHidden()
    }
    function isHidden(){
        setHidden(!hidden)
    }
    return (
        <div className={styles.sort}>
            <div className={styles.label}>
                {hidden ? <img src='img/up-arrow.png' onClick={isHidden}/> :
                <img src='img/down-arrow.png' onClick={isHidden}/> }
                <b>Сортировать по: </b> <span>{current}</span>
            </div>
            {!hidden && <div className={styles.popup}>
                <ul>
                    {categories.map((item, i) => (
                        <li key={i} onClick={() => currentItem(item)}>{item}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default Sort;