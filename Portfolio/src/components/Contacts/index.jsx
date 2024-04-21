import styles from "./style.module.scss";
import image from "../../assets/flower.png";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Menu } from "../Menu";

export const Contacts = () => {
    const [contatoAtual, setContatoAtual] = useState('Contatos');

    const handleChangeContato = (newContact) => {
        setContatoAtual(newContact);
    };
    const quantityImages = 10; 
  return (
    <section id="Contacts" className={styles.sectionHome}>
        <Menu/>
        <div className={styles.divContent}>
            <div className={styles.divImagesTop}>
                {[...Array(quantityImages)].map(( index) => (
                    <img key={index} className={styles.divImage} src={image} alt="flor" />
                ))}
            </div>
            <div className={styles.divTitle}>
                  <div className={styles.divTitleDesigner}>
                      <h2 className={styles.h1}>{contatoAtual}</h2>
                  </div>
            </div>
                <div className={styles.divH3}>
                  <div className={styles.divContentContacts}>
                      <button className={styles.h3} onClick={() => handleChangeContato(<h3 className={styles.titleOption}>(71)996224381</h3>)}>
                        <BsFillTelephoneFill className={styles.icon} />
                      </button>
                      <button className={styles.h3} onClick={() => handleChangeContato(<h3 className={styles.titleOption}>gabrielaoliveirajobs@gmail.com</h3>)}>
                        <MdOutlineEmail  className={styles.icon} />
                      </button>
                      <button className={styles.h3} onClick={() => handleChangeContato(<a href="https://github.com/GabrielaOliveira02"  target="_blank" className={styles.titleOptionLink} >GabrielaOliveira02</a>)}>
                        <FaGithub className={styles.icon} />
                      </button>
                      <button className={styles.h3} onClick={() => handleChangeContato(<a href="https://www.linkedin.com/in/gabriela-oliveira-46264a26b/"  target="_blank" className={styles.titleOptionLink} >Gabriela Oliveira</a>)}>
                        <FaLinkedin className={styles.icon} />
                      </button>
                  </div>
                  <div className={styles.divImages}>
                  {[...Array(quantityImages)].map(( index) => (
                                <img key={index} className={styles.divImage} src={image} alt="flor" />
                            ))}
                  </div>
                </div>
        </div>
    </section>
  );
}

