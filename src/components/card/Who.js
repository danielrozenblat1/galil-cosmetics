import ActionAreaCard from "./Card"
import styles from "./Who.module.css"
import orly from "../../images/אורלי ללא רקע.png"
import shlomi from "../../images/שלומי ללא רקע.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import Slider from "react-slick"
import NewCard from "./NewCard"
const Who=()=>{

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 100,
            delay: 200,
            scale: 1,
          });
        },[])
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: window.innerWidth > 750 ? 2 : 1,
            slidesToScroll:  window.innerWidth> 750 ? 2 : 1,
          };
    return <>
    
    <div className={styles.title} id="מי אנחנו">מי אנחנו?</div>
<NewCard/>
    
    
    </>
}
export default Who