import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"

import { useRef } from "react"
import Step from "../components/steps/Step";
import Button from "../components/button/Button";
const ThirdScreen=()=>{
    const playerRef1=useRef(null);



return <>

<div className={styles.title} id="תהליך העבודה איתי">איך נחזיר אותך בזמן ?</div>
<div className={styles.description}>תהליך האנטי אייג'ינג לא קורה ביום וגם לא ביומיים ,יש כמה שלבים שתעברי איתי עד התוצאה שלך</div>
<div className={styles.row}>
<Step number={1} title="פגישת ייעוץ-אבחון" description="אנחנו ניפגש , המומחים שלנו יאבחנו את העור שלך ונדע איפה בדיוק צריך לטפל ואיך"/>
<Step number={2} title="הבנה של צורך ורצון לקוחה" description="אנחנו ניפגש , המומחים שלנו יאבחנו את העור שלך ונדע איפה בדיוק צריך לטפל ואיך"/>
<Step number={3} title="הסבר על אפשרויות אלטרנטיבות טיפול" description="אנחנו ניפגש , המומחים שלנו יאבחנו את העור שלך ונדע איפה בדיוק צריך לטפל ואיך"/>
</div>
<div className={styles.row}>

<Step number={4} title="תיאום ציפיות" description="אנחנו ניפגש , המומחים שלנו יאבחנו את העור שלך ונדע איפה בדיוק צריך לטפל ואיך"/>
<Step number={5} title="קביעת תאריך טיפול/סדרה" description="אנחנו ניפגש , המומחים שלנו יאבחנו את העור שלך ונדע איפה בדיוק צריך לטפל ואיך"/>
<Step number={6} title="תיעוד, צילומים" description="אנחנו ניפגש , המומחים שלנו יאבחנו את העור שלך ונדע איפה בדיוק צריך לטפל ואיך"/>
</div>

<Button text="אני רוצה לשמוע עוד"/>
</>


}
export default ThirdScreen