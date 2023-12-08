import styles from './Page404.module.css'

export default function Page404(){
    return(
        <section className={styles.notFound}>
            <p className={styles.title}>404</p>
            <p className={styles.subtitle}>Página não encontrada</p>
        </section>
    )
}