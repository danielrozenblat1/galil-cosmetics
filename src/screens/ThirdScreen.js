import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"

import { useRef } from "react"
import Step from "../components/steps/Step";
import Button from "../components/button/Button";
import FifthScreen from "./FifthScreen";
const ThirdScreen=()=>{
    const playerRef1=useRef(null);



return <>

<div className={styles.title} id="תהליך העבודה איתי">איך נחזיר את עורך בזמן ?</div>
<FifthScreen/>
{/* <div className={styles.description}>תהליך האנטי אייג'ינג לא קורה ביום וגם לא ביומיים ,יש כמה שלבים שתעברי איתי עד התוצאה שלך</div> */}
{/* <div className={styles.row}>
<Step number={1} title="פגישת ייעוץ-אבחון" description="תיאום פגישה איתי , על מנת לאבחן את סוג ומצב בריאות העור"/>
<Step number={2} title="הבנה של צורך ורצון לקוחה" description="הבנה של הצורך והשיניים שבהם את מעוניינת"/>
<Step number={3} title="הסבר על אפשרויות אלטרנטיבות טיפול" description="הסבר על אפשרויות הטיפול הקיימות בקליניקה המתאימות לסוג ומצב עורך"/>
</div>
<div className={styles.row}>

<Step number={4} title="תיאום ציפיות" description="יחד נבין לאילו תוצאות ניתן להגיע ולמה ניתן לצפות"/>
<Step number={5} title="קביעת תאריך טיפול/סדרה" description="בדרך כלל טיפולי הצערת העור, אינם מסתיימים במפגש אחד, אלא ברצף של 6-8 טיפולים הנקבעים אחת לחודש"/>
<Step number={6} title="תיעוד, צילומים" description="השינויים המתקבלים מתרחשים מטיפול לטיפול 
והשינוי המתקבל הינו טבעי ביותר, ולכן חשוב שגם את תראי את השינויים"/>
</div> */}

<Button text="לחץ כאן לשיחת ייעוץ חינמית"/>
</>


}
export default ThirdScreen