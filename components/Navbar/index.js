import styles from "./navbar.module.css";
import logo from "/images/Pnut.png"

export default function Navbar() {
    return (
        <div className={styles.color}>
            <div className={styles.container}>
                <img src={logo.src}></img>
                <div className={styles.container__inner}>
                    <a className={styles.container__inner__tag} href="#">Products</a>
                    <a className={styles.container__inner__tag} href="#">Ingrediants</a>
                    <a href="#"><button className={styles.container__inner__shop}>Shop</button></a>
                </div>
            </div>
        </div>
    )
}