import React, {ReactNode} from 'react'
import styles from '../styles/Container.module.sass'
interface IContainerProps{
    children: ReactNode;
}
const Container:React.FC<IContainerProps> = ({children}) => {
    return <div className={styles.container}>{children}</div>
}
export default Container