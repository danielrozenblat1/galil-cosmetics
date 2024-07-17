import { useEffect } from "react";
import Button from "../components/button/Button"
import styles from "./ForthPage.module.css"
import ScrollReveal from "scrollreveal";
import face from "../images/גליל מדיקל פנים.png"
import NewBox from "../components/newBox/NewBox";
import cosmetic from "../images/טיפולים קוסמטים.png"
import estetic from "../images/אסטתיקה רפואית.png"
import laser from "../images/טיפולי לייזר מתקדמים.png"
import cosmetic2 from "../images/טיפולים קוסמטים 2.png"
import estetic2 from "../images/אסתטיקה רפואית 2.png"
import laser2 from "../images/טיפולי לייזר מתקדמים 2.png"
const ForthScreen=()=>{

useEffect(()=>{
    ScrollReveal().reveal(`.${styles.wrap}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });

},[])

    return <>
{/* <div className={styles.header} id="אנטי אייג'ינג">בואי נבין טיפה לעומק</div>
 <div className={styles.title}>אנטי אייג'ינג</div>
 */}

<div className={styles.center}><img className={styles.image} src={face} alt="גליל מדיקל קוסמטיק"/></div>
<div className={styles.job}>הזדקנות תאי העור <br/> פגיעה במערכת חיסונית של העור <br/> עור דק ודהוי</div>

<div className={styles.column}>
<NewBox src={cosmetic} src2={cosmetic2} />
<NewBox src={estetic} src2={estetic2}  />
<NewBox src={laser} src2={laser2}  />
</div>
<h6 className={styles.title}>מה זה טיפולי אנטי אייג'ינג?</h6>
<div className={styles.description}>טיפולי אנטי אייג'ינג הם סדרת פרוצדורות וטיפולים שנועדו להאט, למנוע או להפחית את סימני ההזדקנות של העור והגוף. המטרה העיקרית של טיפולים אלו היא לשמר את המראה הצעיר, להפחית קמטים, לטפל בנזקים שנגרמים על ידי חשיפה לשמש, לשפר את גמישות העור ולהשיב את החיוניות והזוהר הטבעי. טיפולי אנטי אייג'ינג יכולים לכלול</div>

<div className={styles.wrapper}>

    <div className={styles.row}>
<div className={styles.wrap}>
<div className={styles.name}>טיפולי אנטי-אייג'ינג 360</div>
<div className={styles.explain}>סדרת טיפולים המשלבים טכנולוגיות רפואיות אסתטיות עם טיפולים קוסמטיים,  שנועדו להאט, למנוע ולהפחית את סימני הזדקנות בצורה המיטבית בדרך של הפעלה והנעה לפעילות הפיזיולוגית והטבעית של העור, תוך השלמת הנפחים החסרים, במידת הצורך.</div>
</div>

<div className={styles.wrap}>
<div className={styles.name}>טיפולים קוסמטיים</div>
<div className={styles.explain}>טיפולים קוסמטיים הם פרוצדורות שנועדו לעזור לשפר את בריאות העור על ידי הפחתת אקנה, קמטים וקידום מראה צעיר יותר, על ידי הפחתת סימני הזדקנות, כגון קמטים, עור נפול וכתמי גיל. 

הטיפולים כוללים:  פילינגים, גלי רדיו, מיקרונידלינג, , זאת על מנת, להעשיר את  העור בויטמינים ואנטי אוקסידנטים ושימוש במוצרי טיפוח המכילים רכיבים פעילים התורמים לעור זוהר, חלק ואחיד בגוון.</div>
</div>
</div>
<div className={styles.row}>
<div className={styles.wrap}>
<div className={styles.name}>טיפולים אסתטיים רפואיים</div>
<div className={styles.explain}>טיפולים המבוצעים ע"י רופא מומחה באסתטיקה. 
טיפולים ע"י הזרקות בוטוקס ליישור הקמטים, חומצה היאלורונית למילוי נפחים, שחסרים כמו בשקעי העיניים , שפתיים וקו לסת. וכן גם לקמטים עמוקים</div>
</div>

<div className={styles.wrap}>
<div className={styles.name}>טיפולי לייזר</div>
<div className={styles.explain}>טיפולי לייזר מאפשרים לטפל במגוון רחב של בעיות בשכבות העמוקות של העור ולהגיע לתוצאות מיטביות, ללא כאב וזמן החלמה. השגת הצערת העור נעשית בדרך הטבעית ביותר של חימום הרקמות ,שמטרתו לעודד ייצור של חלבוני בנייה כמו קולגן ואלסטין והסרת נגעים,סרחי עור , נקבוביות פעורות</div>
</div>

</div>
</div>
<Button text="לחצ/י כאן לשיחת ייעוץ חינמית"/>
</>

}
export default ForthScreen