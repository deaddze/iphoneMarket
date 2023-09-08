import styles from '../styles/Search.module.sass'

function Search(){
    return (
    <form action="" method="post" className={styles.search}>
        <input type="search" name="" placeholder="Найти..." />
        <input type="submit" name="" value="" />
    </form>)
}
export default Search