import styles from "./Button.module.css"
const Button=(props)=>{

return <>
<div className={styles.wrap}>
<button className={styles.button}>{props.text}</button>
</div>

</>

}
export default Button