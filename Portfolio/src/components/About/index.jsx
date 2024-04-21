import image from "../../assets/flower.png";
import { Menu } from "../Menu";
import styles from "./style.module.scss";
export const About = () => {
    const quantityImages = 10; 
    return(
        <section id="About" className={styles.sectionHome}>
                <Menu />
                <div className={styles.divContent}>
                <div className={styles.divImages}>
                    {[...Array(quantityImages)].map(( index) => (
                                <img key={index} className={styles.divImage} src={image} alt="flor" />
                            ))}
                </div>
                    <div className={styles.divTitle}>
                        <div className={styles.divTitleDesigner}>
                            <h2 className={styles.h2}>Olá,eu sou a Gabs!</h2>
                        </div>
                        <div className={styles.divH3}>
                            <h3 className={styles.h3}> Sou uma desenvolvedora fullstack apaixonada por jogos. Tenho habilidades para transformar ideias em aplicações web completas, desde interfaces intuitivas até APIs eficientes. Acredito na combinação da minha paixão por jogos e minhas habilidades técnicas para criar experiências únicas. Vamos colaborar para criar algo incrível juntos!</h3>
                        </div>
                    </div>
                        <div className={styles.divImages}>
                        {[...Array(quantityImages)].map(( index) => (
                            <img key={index} className={styles.divImage} src={image} alt="flor" />
                        ))}
                        </div>
                </div>
        </section>
    )
}