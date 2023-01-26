import styles from "./hero.module.css";
import Image from "next/image";
import chocolate from "/images/hero-chocolate.png"
import cracks1 from "/images/cracks1.png"
import cracks2 from "/images/cracks2.png"
import cracks3 from "/images/cracks3.png"
import cracks4 from "/images/cracks4.png"
import cracks5 from "/images/cracks5.png"

export default function Hero() {
    return (
        <div className={styles.color}>
            <div className={styles.container}>
                <h1 className={styles.container__h1}>THE BEST CHOCOLATE THAT YOU WILL TASTE. EVER!</h1>
                <p className={styles.container__p}>Seriously, You won't even try other brands once you try our chocolate. Give it a go!</p>
                <img className={styles.container__img} src={chocolate.src}></img>
            </div>
            <div className={styles.contentContainerColor}>
                <div className={styles.contentContainer}>
                    <img className={styles.contentContainer__cracks1} src={cracks1.src}></img>
                    <img className={styles.contentContainer__cracks2} src={cracks2.src}></img>
                    <img className={styles.contentContainer__cracks3} src={cracks3.src}></img>
                    <img className={styles.contentContainer__cracks4} src={cracks4.src}></img>
                    <img className={styles.contentContainer__cracks5} src={cracks5.src}></img>
                </div>
            </div>
        </div>
    )
}