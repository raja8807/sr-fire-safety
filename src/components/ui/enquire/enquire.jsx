const { default: CustomButton } = require("../custom-button/custom_button")
import styles from './enquire.module.scss'

const EnquireBtn = ()=>{
    return <div className={styles.enquire_btn}>
        <CustomButton>ENQUIRY</CustomButton>
    </div>
}

export default EnquireBtn