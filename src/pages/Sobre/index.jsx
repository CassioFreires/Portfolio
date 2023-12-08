import styles from './Sobre.module.css'
import htmlSvg from './images/html.svg';
import cssSvg from './images/css.svg';
import jsSvg from './images/javascript.svg';
import reactSvg from './images/react.svg';
import SassSvg from './images/sass.svg';
import bsSvg from './images/bootstrap.svg';
import tailwindSvg from './images/tailwind.svg';
import nodejs from './images/nodejs.svg';
import bdSvg from './images/bd.svg';
import avatar from './images/avatar.svg'
import { useState } from 'react';


export default function Sobre(){

    const [displayEssia, setDisplayEssia] = useState({display: 'block'})
    const [displayEasyCob, setDisplayEasyCob] = useState({display: 'none'})

    const handleClickEssia = (e) => {
        e.preventDefault();
        setDisplayEasyCob({display: 'none'})
        setDisplayEssia({display: 'block'})
    }


    const handleClickEasyCob = (e) => {
        e.preventDefault();
        setDisplayEssia({display: 'none'})
        setDisplayEasyCob({display: 'block'})
        
    }
    return(
        
        <section className={styles.container}>
            <div className={styles.descricao}>
                <div className={styles.box_avatar}>
                    <figure>
                        <img src={avatar} alt="" />
                    </figure>
                </div>
                <div className={styles.box_resume}>
                    <h2>Sobre</h2>
                    <p> Olá, <span className={styles.text}>Bem-vindo ao meu mundo digital!</span>  </p>
                    <p>Meu nome é <span className={styles.text_nome}>Cassio Souza, 25 anos.</span></p>
                    <p><span className={styles.text}>Dev FullStack.</span></p>
                    <p>Formado em Análise e Desenvolvimento de Sistemas - 12/2023.</p>
                    <p>Venho trabalhando na área de TI há 2 anos, onde desenvolvi habilidades técnicas como produção de conteúdo e suporte N1 e N2. Além disso, sou um profissional dedicado ao aprendizado contínuo e sempre busco me atualizar com as últimas tendências e tecnologias do mercado.</p>
                    <p>Minha paixão por tecnologia, engenharia, física e astronomia me impulsiona a compreender o funcionamento do universo. </p>
                    <p> Adoro transformar ideias físicas em experiências digitais, explorando as fronteiras entre o tangível e o virtual. Navegue pelo meu portfólio para descobrir como aplico meu conhecimento e criatividade para criar soluções inovadoras e impactantes.</p>
                </div>
            </div>
            <div className={styles.box_experience}>
                <h2>Experiências</h2>
                
                <div className={styles.box_experience_flex}>

                    <div className={styles.box_experience_list}>
                        <div onClick={handleClickEssia}><h3>Essia Teach</h3></div>
                        <div onClick={handleClickEasyCob}><h3>EasyCob</h3></div>
                    </div>

                    <div className={styles.box_experience_list_content}>
                        <div style={displayEssia}>
                            <h2>Produtor de conteúdo</h2>
                            <h3>Essia - Estágio</h3>
                            <h4>fev de 2022 - set de 2022 · 8 meses</h4>
                            <p>Realizar testes de qualidade, desenvolver projetos de sequências didáticas em XML, HTML, CSS, SASS, auxiliar na arquitetura de código para desenvolvimento de estruturas de conteúdos didáticos, auxiliar nas demais atividades da área.</p>
                            <p>Competências: XML · CSS · HTML · SASS</p>
                        </div>

                        <div style={displayEasyCob}>
                            <h2>Service Desk</h2>
                            <h3>Easycob · Estágio</h3>
                            <h4>jun de 2021 - fev de 2022 · 9 meses</h4>
                            <p>Suporte na área de informática N1 e N2, tais como manutenção de computadores e das redes de dados, (cabos, switch, roteadores...), manutenção e configuração de sistemas telefônicos digital (VOIP), controle dos equipamentos (hardware), processo de crimpagem, implementação de sistemas, configuração de VPN, utilização de sistemas de gestão de chamados, suporte a virtualização de maquinas e servidores.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.box_icons}>
                <h2>Skilss</h2>
                <div className={styles.box_icons_flex}>
                    <img src={htmlSvg} alt="Imagem de icone do html" title='html'/>
                    <img src={cssSvg} alt="Imagem de icone do css" title='css'/>
                    <img src={jsSvg} alt="Imagem de icone do javascript" title='javascript'/>
                    <img src={reactSvg} alt="Imagem de icone do react" title='reactjs' />
                    <img src={SassSvg} alt="Imagem de icone do sass" title='sass' />
                    <img src={bsSvg} alt="Imagem de icone do bootstrap" title='bootstrap'/>
                    <img src={tailwindSvg} alt="Imagem de icone do tailwind" title='tailwind'/>
                    <img src={nodejs} alt="Imagem de icone do nodejs" title='nodejs'/>
                    <img src={bdSvg} alt="Imagem de icone do banco de dados" title='banco de dados' />
                </div>
            </div>
            
        </section>
    )
}