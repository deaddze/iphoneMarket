import styles from '../styles/Search.module.sass'
import debounce from 'lodash.debounce'
import React from 'react'
import {SearchContext} from '../App'
function Search(){
    const [value, setValue] = React.useState('')
    const {setInputValue} = React.useContext(SearchContext)
    const inputRef = React.useRef()
    const inputDebounce = React.useCallback(
        debounce((str) => {
            setInputValue(str)
        }, 550), []
    )
    const onClickClear = () => {
        inputRef.current.focus()
    }
    const onChangeInput = (e) => {
        setValue(e.target.value);
        inputDebounce(e.target.value)
    }
    return (
    <form action="" method="post" className={styles.search}>
        <input 
        type="search" 
        name="" 
        ref={inputRef} 
        placeholder="Найти..." 
        value={value} 
        onChange={onChangeInput}/>
        <input 
        type="submit" 
        name="" 
        value="" />
    </form>)
}
export default Search