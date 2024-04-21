import styles from "./style.module.scss";
import image from "../../assets/flower.png";
export const Footer = () => {
    return(
        <div className={styles.divFooter}>
            <div className={styles.divContent}>
                <img className={styles.divImage} src={image} alt="flor" />
                <h2 className={styles.h2}>©2024 Gabriela Oliveira</h2>
            </div>
        </div>
    )
}