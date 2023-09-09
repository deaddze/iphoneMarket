import styles from '../styles/Categories.module.sass';
import React from 'react';

const Categories = ({category, setCategory}) => {
    const categories = ['Все', 'IPhone 14', 'IPhone 13', 'IPhone 12', 'IPhone 11'];

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((item, i) => (
                    <li
                        key={i}
                        className={category === i ? styles.active : ''}
                        onClick={() => setCategory(i)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;




