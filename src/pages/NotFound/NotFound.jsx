import styles from './NotFound.module.sass'
const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <div>
                <h1>Ничего не найдено</h1>
                <p>К сожалению данная страница отстутвует в нашем интернет-магазине</p>
                <img src='img/box.png'></img>
                <button>Вернуться назад</button>
            </div>
        </div>
    )
}
export default NotFound