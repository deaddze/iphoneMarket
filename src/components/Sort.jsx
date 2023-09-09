import styles from '../styles/Sort.module.sass'
import React from 'react'
const Sort = ({sortType, setSortType}) => {
    const categories = [
    {name: 'популярности', sortProperty: 'rating', type: 'desc'},
    {name: 'возрастанию', sortProperty: 'price', type: 'desc'},
    {name: 'убыванию', sortProperty: 'price', type: 'asc'}
    ]
    const [hidden, setHidden] = React.useState(true)
    function currentItem(item){
        setSortType(item);
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
                <b>Сортировать по: </b> <span>{sortType.name}</span>
            </div>
            {!hidden && <div className={styles.popup}>
                <ul>
                    {categories.map((item, i) => (
                        <li key={i} onClick={() => currentItem(item)}>{item.name}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default Sort;