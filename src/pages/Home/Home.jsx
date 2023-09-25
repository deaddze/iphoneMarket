import styles from './Home.module.sass'
import Card from '../../components/Card'
import Skeleton from '../../components/CardBlock/Skeleton'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Pagination from '../../components/Pagination'
import {SearchContext} from '../../App'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchMarket} from '../../redux/slices/marketSlice'

const Home = () => {
    const dispatch = useDispatch();
    const {inputValue} = React.useContext(SearchContext);
    const category = useSelector(state => state.filter.categoryId);
    const sortType = useSelector(state => state.filter.sort);
    const currentPage = useSelector(state => state.filter.pageCount);
    const limitCount = useSelector(state => state.filter.limit)
    const {status, items} = useSelector(state => state.market)
    const fetchIPhone = async() => {
      const searchValue = inputValue? `&search=${inputValue}` : '';
      const categoryType = category > 0? `&category=${category}`: '';
      const page = `page=${currentPage}`;
      const sort = `&sortBy=${sortType.sortProperty}`;
      const order = `&order=${sortType.type}`;
      const limit = category === 0 ? `&limit=7` : ''
      dispatch(
        fetchMarket({
        searchValue,
        categoryType, 
        page,
        sort,
        order,
        limit,
      }))
    }

    React.useEffect(() => {
      fetchIPhone()
    }, [category, sortType.sortProperty, currentPage, inputValue]);
    const phone = items.map(item => (<Card key={item.id} {...item} />));
    return (
    <div className={styles.home}>
      <div className={styles.category}>
        <Categories/>
        <Sort/>
      </div>
      <h2 className={styles.title}>Все Айфоны</h2>
      {status === 'error' ? (
      <div>
        <h2>Произошла ошибка</h2>
        <p>Перезапустите приложение или зайдите позже</p>
      </div>) : (<div className={styles.cards}>
        {status === 'loading' ? [...new Array(7)].map((_, i) => <Skeleton key={i}/>) : phone}
      </div>)}
        {6 <= items.length ? <Pagination/> : ''}
    </div>
    )
}

export default Home