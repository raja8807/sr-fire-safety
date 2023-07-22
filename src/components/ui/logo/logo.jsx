import { Image } from 'react-bootstrap'
import styles from './logo.module.scss'
const Logo = ()=>{
    // return <h2 className={styles.logo}>SR</h2>
    return <h2 className={styles.logo}>
        <Image src='/images/logo.jpg' fill alt='logo' style={{width:'100%'}}/>
    </h2>
}

export default Logo