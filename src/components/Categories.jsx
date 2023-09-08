import styles from '../styles/Categories.module.sass';
import React from 'react';

const Categories = ({active, currentActive}) => {
   
    const categories = ['Все', 'IPhone 14', 'IPhone 13', 'IPhone 12', 'IPhone 11'];

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((item, i) => (
                    <li
                        key={i}
                        className={active === i ? styles.active : ''}
                        onClick={() => currentActive(i)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;




