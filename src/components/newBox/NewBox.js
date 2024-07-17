import Button from "../button/Button"
import styles from "./NewBox.module.css"
const NewBox=(props)=>{

return <>
<div className={styles.center}><img className={styles.image} src={props.src} alt={props.src}/></div>
<div className={styles.center}><img className={styles.image} src={props.src2} alt={props.src2}/></div>
<Button text="למידע נוסף"/>
</>


}
export default NewBox