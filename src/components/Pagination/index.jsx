import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.sass'
import {setPageCount} from '../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'
const Pagination = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.pagination}>
            <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => dispatch(setPageCount(e.selected + 1))}
            pageRangeDisplayed={8}
            pageCount={2}
            renderOnZeroPageCount={null}
        />
        </div>
    )
}
export default Pagination