import styles from './Home.module.sass'
import Card from '../../components/Card'
import Skeleton from '../../components/CardBlock/Skeleton'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import Pagination from '../../components/Pagination'
import {SearchContext} from '../../App'
import React from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
const Home = () => {
    const navigate = useNavigate();
    const {inputValue} = React.useContext(SearchContext)
    const category = useSelector(state => state.filter.categoryId)
    const sortType = useSelector(state => state.filter.sort)
    const [isLoading, setIsLoading] = React.useState(true)
    const currentPage = useSelector(state => state.filter.pageCount)
    const [activeData, setActiveData] = React.useState([])
    React.useEffect(() => {
      if(window.location.street){
        const params = qs.parse(window.location.search.substring(1))
        console.log(params)
      }
    }, [])
    React.useEffect(() => {
      setIsLoading(true);
      const searchValue = inputValue? `&search=${inputValue}` : ''
      const categoryType = category > 0? `category=${category}`: '';
      const page = `page=${currentPage}`;
      const sort = `&sortBy=${sortType.sortProperty}`
      const order = `&order=${sortType.type}`
      axios.get(`https://64f785679d7754084953ac39.mockapi.io/items?${page}${searchValue}&limit=7&${sort}${categoryType}${order}`)
      .then(res =>{
        setActiveData(res.data);
        setIsLoading(false);
      })
     
    }, [category, sortType.sortProperty, currentPage, inputValue])
    
    React.useEffect(() => {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        category, 
        currentPage
      })
      navigate(`?${queryString}`)
    }
    , [category, sortType, currentPage, inputValue])
    const phone = activeData.map(item => (<Card key={item.id} {...item} />))
  
    return (
    <div className={styles.home}>
      <div className={styles.category}>
        <Categories/>
        <Sort/>
      </div>
      <h2>Все Айфоны</h2>
      <div className={styles.cards}>
        {isLoading ? [...new Array(7)].map((_, i) => <Skeleton key={i}/>) : phone}
      </div>
      <Pagination/>
    </div>
    )
}

export default Home