import styles from './Card.module.css';
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function Card({name, descrition, html_url, tecnologies}){
    return(
        <section className={styles.card}>
            <h2>{name}</h2>
            <p>{descrition}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icons}>
                    <FaHtml5/>
                    <FaCss3 />
                    <FaJs />
                    <FaReact/>
                </div>
                <Link to={html_url} className={styles.card_button} target='_blank'>
                    <BsArrowRight/>
                </Link>
            </div>
        </section>
    )
}