import Box from "../components/box/Box"
import Recommends from "../components/recommends/Clients"
import styles from "./SecondScreen.module.css"
import laser from "../icons/wired-lineal-1001-shop-scanner.json"
import hilrony from "../icons/wired-lineal-428-injection.json"
import flower from "../icons/wired-lineal-1574-spa-flower.json"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>
{/* 
    <div className={styles.title}>איך נטפל באנטי אייג'ינג ?</div>
    <div className={styles.row}>
  <Box title="הצערת תאי העור" description="בעזרת טיפולי מחטים מיוחדים נחזיר את העור שלך לגילאי ה20" icon={flower}/>
  <Box title="חומצה הילרונית" description="בעזרת טיפולי מחטים מיוחדים נחזיר את העור שלך לגילאי ה20"  icon={hilrony}/>
    <Box title="חידוש העור ב-לייזר" description="בעזרת טיפולי מחטים מיוחדים נחזיר את העור שלך לגילאי ה20"  icon={laser}/>
    </div>
<Button text="לחצי כאן לשיחת ייעוץ"/> */}
    
    <Recommends/>
    <Button text="גם אני רוצה להצטרף אליהן"/>
    </>
}
export default SecondScreen