import styles from "./NewCard.module.css";
import orly from "../../images/אורלי ברטלר תדמית.png";
import shlomi from "../../images/שלומי ברטלר תדמית.png";

const NewCard = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <img className={styles.image} src={orly} alt="אורלי" />
                    <div>
                        <div className={styles.title}>אורלי ברטלר</div>
                        <div className={styles.description}>
                            קוסמטיקאית משנת 2004, בעלת תואר BSc , וזמן רב היה לי החלום לעבוד בתחום האסטתי והקוסמטי, אני מאמינה ויודעת שכל אחד ואחת יכולים בשגרת טיפוח קבועה עם המרכיבים הפעילים המותאמים אישית להיות בעל/ת עור קורן צעיר ובריא. אני יודעת שעם הידע , הטכנולוגיה והחומרים המתקדמים, אפשרי להרגיש ולהראות עם עור בריא וקורן, בכל נקודת זמן בציר העולה של הגיל!
                        </div>
                    </div>
                </div>

                <div className={`${styles.column} ${styles.reverse}`}>
                    <img className={styles.image} src={shlomi} alt="שלומי" />
                    <div>
                        <div className={styles.title}> ד''ר שלומי ברטלר</div>
                        <div className={styles.description}>
                            מנתח באסותא וב RMC. - המנהל הרפואי לשעבר של מכבי שירותי בריאות אצבע הגליל והגולן. מ-2011 עוסק ברפואה אסתטית במרפאת יסוד המעלה בנוסף למרפאת אא"ג.
                            טיפולי הפנים הם חלק בלתי נפרד מהעיסוק המרכזי שלי כמנתח ראש וצוואר. ההבנה והידע שצברתי בתחום הם אלו שמנחים אותי בטיפולי האסתטיקה.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewCard;