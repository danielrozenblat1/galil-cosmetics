import styles from "./FifthScreen.module.css"
import young from "../images/נצעיר את עורך.png"
import meet from "../images/פגישת ייעוץ ואבחון.png"
import Button from "../components/button/Button"
const FifthScreen=(props)=>{
return <>
    
 
    <div className={styles.center}><img className={styles.image} src={young} alt="איך נצעיר את עורך בזמן"/></div>
    <div className={styles.center}><img className={styles.image} src={meet} alt="פגישת ייעוץ ואבחון"/></div>

   
    <div className={styles.description}> הכוללת פגישה אישית איתי, על מנת לאבחן את  סוג, מצב ובריאות העור </div>
    <div className={styles.line}></div>

    
    <div className={styles.description}>נתאם ציפיות, נבין מה הצורך והשינויים שאת/ה  מעוניינ/ת</div>
    <div className={styles.line}></div>
    <div className={styles.description}>יינתן הסבר מפורט ומלא על אפשרויות הטיפולים  בקליניקה המתאימות למצב העור על מנת שנוכל  להגיע לתוצאה המקסימלית. </div>
    <div className={styles.line}></div>
    <div className={styles.bold}>קביעת טיפולים/סדרה</div>
    <div className={styles.description}>אחת לחודש במשך 6-8 טיפולים </div>
    <div className={styles.line}></div>

    <div className={styles.bold}>תיעוד וצילומים: </div>
    <div className={styles.description}>השינויים המתקבלים מתרחשים מטיפול לטיפול  והשינוי המתקבל הינו טבעי ביותר, לכן חשוב שגם  את/ה תראי/ה את השינויים המתרחשים </div>
    <div className={styles.line}></div>
   
</>


}
export default FifthScreen