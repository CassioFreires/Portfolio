import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Projetos.module.css';
import jsonFrontEnd from '../../json/projetos_front_end.json';

export default function Projetos(){

    return(
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {jsonFrontEnd.length > 0 ? 
                <section className={styles.lista}>
                    {
                        jsonFrontEnd.map((item) => {
                            return <Card name={item.name} descrition={item.description} html_url={item.html_url} tecnologies={item.language} key={item.id}/>
                        })
                    }
                </section>
                  :
                <p>Carregando repositórios...</p>
            }
        </section>
    )
}