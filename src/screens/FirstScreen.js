import styles from "./FirstScreen.module.css"
import logo from "../images/אורלי ברטלר לוגו.png"

const FirstScreen=(props)=>{
return <>
    <div className={props.scrolled ? styles.descriptionP : styles.description}>הגיע הזמן לחזור לימים שבהם הסתכלת במראה ואהבת את מה שאת רואה במראה</div>
    <div className={styles.description}>עור ללא קמטים וכתמים המופיעים בגלל גילך הכרונולוגי העולה ונזקי השמש המצטברים</div>
    <div className={styles.title}>טיפולי אנטי אייג'ינג</div>


</>


}
export default FirstScreen