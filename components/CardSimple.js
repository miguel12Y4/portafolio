import React from 'react'

import styles from '../styles/cardSimple.module.css'

export default function CardSimple() {

    const tecnologias = ["HTML", "CSS", "JavaScript"]

    return (
        <div className={styles.container}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias aut harum quis natus labore maiores eveniet, odit officia inventore corrupti similique tenetur quibusdam quasi repudiandae velit voluptate, rerum, asperiores ducimus.</p>
            <div className={styles.tecnologias}>

            {tecnologias.map((tec, idx) =>
                <span key={idx}>
                    {tec}
                </span>
            )}
            </div>
        </div>
    )
}
