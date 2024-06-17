import { useEffect } from "react";
import Button from "../components/button/Button"
import styles from "./ForthPage.module.css"
import ScrollReveal from "scrollreveal";
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

<div className={styles.title}>אנטי אייג'ינג</div> */}
<div className={styles.job}>הזדקנות תאי העור | פגיעה במערכת חיסונית של העור | עור דק ודהוי</div>
<div className={styles.description}>טיפולי אנטי אייג'ינג הם סדרת פרוצדורות וטיפולים שנועדו להאט, למנוע או להפחית את סימני ההזדקנות של העור והגוף. המטרה העיקרית של טיפולים אלו היא לשמר את המראה הצעיר, להפחית קמטים, לטפל בנזקים שנגרמים על ידי חשיפה לשמש, לשפר את גמישות העור ולהשיב את החיוניות והזוהר הטבעי. טיפולי אנטי אייג'ינג יכולים לכלול</div>

<div className={styles.wrapper}>

    <div className={styles.row}>
<div className={styles.wrap}>
<div className={styles.name}>טיפולים קוסמטיים</div>
<div className={styles.explain}>כמו הזרקות בוטוקס, חומצה היאלורונית ופילינג כימי.</div>
</div>

<div className={styles.wrap}>
<div className={styles.name}>טיפולים טכנולוגיים</div>
<div className={styles.explain}>כמו לייזר, גלי רדיו וטיפולים במיקרו-מחטים.</div>
</div>
</div>
<div className={styles.row}>
<div className={styles.wrap}>
<div className={styles.name}>טיפולים טבעיים</div>
<div className={styles.explain}>שימוש במוצרי טיפוח המבוססים על רכיבים טבעיים כמו ויטמינים, אנטי-אוקסידנטים וצמחי מרפא.</div>
</div>

<div className={styles.wrap}>
<div className={styles.name}>טיפולים רפואיים</div>
<div className={styles.explain}>הנעשים על ידי רופאי עור ומומחים לאסתטיקה, כגון טיפולי פלסטיקה, מתיחות פנים והשתלות עור.</div>
</div>

</div>
</div>
<Button text="לחצי כאן לשיחת ייעוץ חינמית"/>
</>

}
export default ForthScreen