import styles from "./FirstScreen.module.css"


const FirstScreen=(props)=>{
return <>
    <div className={props.scrolled ? styles.descriptionP : styles.description}>הגיע הזמן לחזור לימים
שבהם הסתכלת במראה
ואהבת את מה שאת/ה רואה?</div>
    <div className={styles.title} id="אנטי אייג'ינג">טיפולי אנטי אייג'ינג</div>


</>


}
export default FirstScreen