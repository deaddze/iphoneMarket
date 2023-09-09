import styles from './NotFound.module.sass'
import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <div>
                <h1>Ничего не найдено</h1>
                <p>К сожалению данная страница отстутвует в нашем интернет-магазине</p>
                <img src='img/box.png'></img>
                <Link to="/">
                    <button>Вернуться назад</button>
                </Link>
            </div>
        </div>
    )
}
export default NotFound