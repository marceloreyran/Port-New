// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './Navbar.module.css';
import {getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)[0];
  return <nav className={styles.navbar}>
    <a  className={styles.title} href="#portfolio">Portfolio</a>

    <div className={styles.menu}>
    <img className={styles.menuBtn} 
    src={ menuOpen ? getImageUrl('nav/closeIcon.png')
    : getImageUrl('nav/menuIcon.png')
    } alt='menu-button'
    onClick={ () => setMenuOpen(!menuOpen)} />

  <img className={styles.closeBtn} src={getImageUrl('')} alt='' />
    <ul className={styles.menuItems}>

      <li>
        <a href="#about">About</a>
      </li>  
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    </div>
  </nav>
}
