import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home(){
    return(
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br />
                    <span>Cassio Souza</span> <br />
                    Dev Full stack
                </p>
                <Link to={'/sobre'}><button  className={`${styles.btn} ${styles.btn_red}`}>Saiba mais sobre mim</button></Link>
            </div>
            <div className={styles.box_img}>
                <figure>
                    <img className={styles.img_home} src="/public/developer-red.svg" alt="Imagem de Home" />
                </figure>
            </div>
        </section>
    )
}
