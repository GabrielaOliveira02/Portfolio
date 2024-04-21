import styles from "./style.module.scss";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import image from "../../assets/flower.png";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
export const Skills = () => {
    const quantityImages = 10; 
    return(
        <section id="Skills" className={styles.sectionHome}>
                <div className={styles.divContent}>
                    <div className={styles.divTitleDesigner}>
                        <h2 className={styles.h1}>Skills</h2>
                        <img className={styles.divImage} src={image} alt="flor" />
                    </div>
                    <div className={styles.divH3}>
                        <div className={styles.divTechs}>
                            <h3 className={styles.h3}> <IoLogoJavascript /> </h3>
                            <h3 className={styles.h3}> <FaHtml5 /> </h3>
                            <h3 className={styles.h3}> <FaCss3Alt /> </h3>
                            <h3 className={styles.h3}> <FaSass /> </h3>
                            <h3 className={styles.h3}> <SiTypescript /> </h3>
                            <h3 className={styles.h3}> <BiLogoPostgresql /> </h3>
                            <h3 className={styles.h3}> <FaReact /> </h3>
                            <h3 className={styles.h3}> <FaPython /> </h3>
                            <h3 className={styles.h3}> <SiDjango /> </h3>
                        </div>
                        <div className={styles.divImages}>
                        {[...Array(quantityImages)].map(( index) => (
                            <img key={index} className={styles.divImage} src={image} alt="flor" />
                        ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}