import React, { useState } from 'react'

import styles from '../styles/cardProyecto.module.css'

function CardProyecto({title, ruta, description, tecnologias, img=true }) {

	const [modal, setModal] = useState(false)

	const handleModal = () => {
		setModal(e => !e);
	}

	return (
		<div className={styles.container}>
			{img?<h3>{title}</h3>:<h4>{title}</h4>}
			{img && <div className={styles.containerImg}>
				<img src="/images/profile.jpg" alt="" />
				<div>
					<p>{description}</p>
				</div>
			</div>}
			<button className={styles.button} onClick={handleModal}>Ver qué aprendí aquí</button>
			<div className={styles.tecnologias}>
				{tecnologias.map((tec, idx) =>
					<span key={idx}>
						{tec}
					</span>
				)}
			</div>
			{modal ?
				<div className={styles.modal}>
					<div className={styles.containerModal}>
						<h3>{title}</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus et natus at pariatur hic fugit dolorum. Facilis, eligendi quas! Porro rerum officia velit aliquam pariatur similique exercitationem possimus, sed, incidunt nihil impedit ratione labore nemo architecto consectetur odit quaerat natus, blanditiis maiores expedita autem facere delectus dolorem alias? Ipsam.</p>
						<button onClick={handleModal}>Cerrar</button>
					</div>
				</div>
				: <></>}
		</div>
	)
}



export default CardProyecto;