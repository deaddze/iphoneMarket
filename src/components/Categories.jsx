import styles from '../styles/Categories.module.sass';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setCategoryId} from '../redux/slices/filterSlice'
const Categories = () => {
    const categories = ['Все', 'IPhone 14', 'IPhone 13', 'IPhone 12', 'IPhone 11'];
    const dispatch = useDispatch();
    const category = useSelector(state => state.filter.categoryId)
    
    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((item, i) => (
                    <li
                        key={i}
                        className={category === i ? styles.active : ''}
                        onClick={() => dispatch(setCategoryId(i))}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;




