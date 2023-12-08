import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header(){

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = (e) => {
        setShowMenu(!showMenu)
    }

    return(
        <header className={styles.header}>
            <Link to={'/'}><p>CassioSouza.dev</p></Link>
            <nav onClick={toggleMenu} className={`${styles.menuHamburguer} ${showMenu ? styles.show : ''}`} >
                <Link to={'/'}><span>Home</span></Link>
                <Link to={'/sobre'}><span>Sobre</span></Link>
                <Link to={'/projetos'}><span>Projetos</span></Link>
                <Link to={'/contato'}><span>Contatos</span></Link>
            </nav>
            <div className={styles.menuButton} onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    )
}