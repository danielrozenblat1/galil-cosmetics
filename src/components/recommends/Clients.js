import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import styles from "./Clients.module.css"
import reccomend1 from "../../images/אורלי ברטלר לפני אחרי 1.png"
import reccomend2 from "../../images/אורלי ברטלר לפני אחרי 2.png"
import reccomend3 from "../../images/אורלי ברטלר לפני אחרי 3.png"
import reccomend4 from "../../images/אורלי ברטלר לפני אחרי 4.png"
import reccomend5 from "../../images/אורלי ברטלר לפני אחרי 5.png"
import reccomend6 from "../../images/אורלי ברטלר לפני אחרי 6.png"
import reccomend7 from "../../images/אורלי ברטלר לפני אחרי 7.png"
import reccomend8 from "../../images/אורלי ברטלר לפני אחרי 8.png"
import reccomend9 from "../../images/אורלי ברטלר לפני אחרי 9.png"
import reccomend10 from "../../images/אורלי ברטלר לפני אחרי 10.png"
import reccomend11 from "../../images/אורלי ברטלר לפני אחרי 11.png"
import reccomend12 from "../../images/אורלי ברטלר המלצה 1.png"
import reccomend13 from "../../images/אורלי ברטלר המלצה 2.png"
import reccomend14 from "../../images/אורלי ברטלר המלצה 3.png"

const Recommends=()=>{
const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 1000 ? 3 : window.innerWidth > 550 ? 2 : 1,
    slidesToScroll:1,
  };
  const content = [

       {
      type: 'image',
      src: reccomend1,
      alt:"אורלי ברטלר לקוחות ממליצים 1.png"
      },
 

      {
        type: 'image',
        src: reccomend2,
        alt:"אורלי ברטלר לקוחות ממליצים 2.png"
      },
 
      {
        type: 'image',
        src: reccomend3,
        alt:"אורלי ברטלר לקוחות ממליצים 3.png"
      },
      {
        type: 'image',
        src: reccomend4,
        alt:"אורלי ברטלר לקוחות ממליצים 4.png"
      },
      {
        type: 'image',
        src: reccomend5,
        alt:"5 אורלי ברטלר לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend6,
        alt:"6 אורלי ברטלר לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src:reccomend7,
        alt:"7 אורלי ברטלר לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend8,
        alt:"8 אורלי ברטלר לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend9,
        alt:"9 אורלי ברטלר לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend10,
        alt:"10 אורלי ברטלר לקוחות ממליצים.png"
      },
   
      {
        type: 'image',
        src: reccomend11,
        alt:"11 אורלי ברטלר לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend12,
        alt:"12 אורלי ברטלר לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend13,
        alt:"13 אורלי ברטלר לקוחות ממליצים.png"
      },
      {
        type: 'image',
        src: reccomend14,
        alt:"14 אורלי ברטלר לקוחות ממליצים.png"
      },
  
   
  

  ];
return <>

<div className={styles.container} id="לקוחות ממליצות">

 <div className={styles.title}>קצת מהלקוחות שלי..</div>
 <div className={styles.explain}>דפדפ/י בין התמונות ותראה/י איך הקסם קורה</div>
 <div className={styles.sliderContainer}>
<Slider {...sliderSettings} style={{zIndex:0}}>
{content.map((item, index) => (
  <div key={index}>
    {item.type === 'image' && (
      <img src={item.src} className={styles.image1} alt={item.alt} />
    )}
    {item.type === 'video' && (
      <video
        style={{ width: "100%", display: "flex", objectFit: "cover", margin: "auto", height: "100%" }}
        muted
        controls
      >
        <source src={item.src} type="video/mp4" />
      </video>
    )}
  </div>
))}
</Slider></div>
</div>
</>
}
export default Recommends