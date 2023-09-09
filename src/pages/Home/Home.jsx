import styles from './Home.module.sass'
import Card from '../../components/Card'
import Skeleton from '../../components/CardBlock/Skeleton'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import React from 'react'
import axios from 'axios'
const Home = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [category, setCategory] = React.useState(0);
    const [sortType, setSortType] = React.useState({
      name: 'популярности',
      sortProperty: 'rating',
      type: 'desc'
    })
    const [activeData, setActiveData] = React.useState([])
   
    React.useEffect(() => {
      setIsLoading(true)
      axios.get(`https://64f785679d7754084953ac39.mockapi.io/items?${category > 0? `category=${category}`: ''}&sortBy=${sortType.sortProperty}&order=${sortType.type}`)
      .then(res => setActiveData(res.data), setIsLoading(false))
    }, [category, sortType])
   
    return (
    <div className={styles.home}>
      <div className={styles.category}>
        <Categories category={category} setCategory={setCategory}/>
        <Sort sortType={sortType} setSortType={setSortType}/>
      </div>
      <h2>Все Айфоны</h2>
      <div className={styles.cards}>
        {isLoading ? [...new Array(13)].map((_, i) => <Skeleton key={i}/>) : activeData.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
    </div>
    )
}

export default Home