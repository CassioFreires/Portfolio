import styles from './Contato.module.css';
import { GoMail } from "react-icons/go";
import {BsInstagram, BsGithub, BsLinkedin} from "react-icons/bs";
import { useState } from "react";

export default function Contato(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const sendWhatsapp = (e) => {
        // falta validar os campos -> fazer depois

        e.preventDefault();
        const mensagemFormatada = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Mensagem: ${msg}`;
        const phoneNumber = '981753423';
        const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagemFormatada)}`;

        window.open(link, '_blank');

        setNome('');
        setEmail('');
        setMsg('');
    }


    return(
        <>
            <div className={styles.topo}>
                <h1>Contatos</h1>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar sobre...</p>
            </div>
            <div className={styles.contato}>
                <section className={styles.section_icons}>
                    <a href="mailto:cassio_souza@live.com" target="_blank" rel="noopener noreferrer">
                        <GoMail className={styles.icons}/>
                    </a>
                    
                    <a href="https://www.instagram.com/cassildsouza/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className={styles.icons}/>
                    </a>

                    <a href="https://github.com/CassioFreires?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <BsGithub className={styles.icons}/>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/cassio-souza-08347a157/" target="_blank" rel="noopnener noreferrer">
                        <BsLinkedin className={styles.icons}/>
                    </a>
                </section>
                <section className={styles.section_formulario}>
                    <form method="post">
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="mensagem">Escreva sua mensagem</label>
                            <textarea id="mensagem" cols="118" rows="15" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                        </div>
                        <div>
                            <button className={`${styles.btn} ${styles.btn_red}`} onClick={sendWhatsapp}>Enviar</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}