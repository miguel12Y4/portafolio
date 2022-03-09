import React, { useState, useEffect } from 'react'

import styles from '../styles/cardProyecto.module.css'

function CardProyecto({title, ruta, description, tecnologias, img=true, link }) {

	const [modal, setModal] = useState(false)

	const [imgIdx, setImg] = useState(0)

	const handleModal = () => {
		setModal(e => !e);
	}

	const nextImg = ()=>{
		if(!ruta) return
		setImg(idx=>{
			const i = (idx%ruta.length)+1
			if(i>=ruta.length){
				return 0;
			}
			return i;
		})
		setTimeout(()=>{
			nextImg()
		}, 4000)
	}

	useEffect(()=>{
		nextImg()
	},[])

	return (
		<div className={styles.container}>
			{img?<h3>{title}</h3>:<h4>{title}</h4>}
			{img && <div className={styles.containerImg}>
				{<img src={"/img-data/"+ruta[imgIdx]} alt="" />}
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
						{description.map(item => <p>{item}</p>)}
					{link && <a href={link}>Ver proyecto en Github</a> }
						<button onClick={handleModal}>Cerrar</button>
					</div>
				</div>
				: <></>}
		</div>
	)
}



export default CardProyecto;