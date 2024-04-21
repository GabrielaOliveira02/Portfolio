import  { useState } from 'react';
import image from "../../assets/flower.png";
import styles from "./style.module.scss";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-btn_burger"></div>
      </div>
      <div className={`menu-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><img className={styles.divFlower} src={image} alt="flor" /></li>
          <li><a href='#Home'>Página Inicial</a></li>
          <li><a href='#About' >Sobre mim</a></li>  
          <li><a href='#Skills' >Skills</a></li> 
          <li><a href='#Projects' >Projetos</a></li>
          <li><a href='#Contacts' >Contatos</a></li> 
        </ul>
      </div>
    </nav>
  );
};