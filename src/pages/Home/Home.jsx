import styles from './Home.module.sass'
import Card from '../../components/Card'
import Skeleton from '../../components/CardBlock/Skeleton'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import React from 'react'
const Home = ({data, isLoading}) => {
    const [active, setActive] = React.useState(0);
    const [activeData, setActiveData] = React.useState([])
    function currentActive(num) {
        setActive(num);
    }
    React.useEffect(() => {
        let current = data.filter(item => item.category === active)
        setActiveData(current)
    }, [active])

    return (
    <div className={styles.home}>
      <div className={styles.category}>
        <Categories active={active} currentActive={currentActive}/>
        <Sort/>
      </div>
      <h2>Все Айфоны</h2>
      <div className={styles.cards}>
        {isLoading ? [...new Array(13)].map((_, i) => <Skeleton key={i}/>) :  active === 0? data.map(item => (
            <Card key={item.id} {...item} />
          )) : activeData.map(item => (
            <Card {...item} key={item.id}/>
          ))}
        </div>
    </div>
    )
}

export default Home