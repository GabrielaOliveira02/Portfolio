import styles from "./style.module.scss";
import image from "../../assets/flower.png"
import { Menu } from "../Menu";
export const Home = () => {
  return(
      <section id="Home" className={styles.sectionHome}>
        <div className={styles.divSection}>
            <div className={styles.divContainer}>
                  <Menu />
                  <h1 className={styles.h1}>Gabriela Oliveira <img className={styles.divImage} src={image} alt="flor" /> </h1>
                <div className={styles.divSubtitle}>
                    <h2 className={styles.h1}> <img className={styles.divImage} src={image} alt="flor" /> Desenvolvedora Full Stack</h2>
                </div>
            </div>
        </div>
      </section>
  )
}

