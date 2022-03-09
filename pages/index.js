import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import Layout from '../components/Layout'

import styles from '../styles/home.module.css'

import CardProyecto from '../components/CardProyecto';


const tec = [
	{
		title: 'Sistema de gestión de inventario',
		ruta: ['inventario1.png', 'inventario2.png', 'inventario3.png'],
		description: ['Este fué mi primer proyecto web "serio", Consistía en un sistema para manejar el inventario de productos de un liceo.','El sistema implementaba la arquitectura cliente-servidor por lo tanto se creó un backend con NodeJS y Express, la Base de datos con postgresSQL y el frontend con vanilla Javascript y Bootstrap.', 'Aquí aprendí los fundamentos del desarrollo web entendiendo cómo van los datos desde el frontend pasando por el backend hasta llegar a la base de datos y viceversa.'],
		tecnologias: ['Postgres', 'Node', 'Git', 'Express', 'Javascript', 'HTML/Bootstrap'],
		link: 'https://github.com/miguel12Y4/inventario'
	},
	{
		title: 'Sistema de etiquetado de imagenes',
		ruta: ['video1.png', 'video2.jpg', 'video3.png'],
		description: ['Sistema para el etiquetado y clasificación de imagenes capturadas de cámaras de seguridad para posteriormente entrenar modelos de Machine Learning para el reconocimiento de objetos.', 'En este caso nos centramos en rehacer el frontend con ReactJS usando librerias de terceros para modificar un canvas donde se muestran las detecciones.', 'Se necesitó comunicarse con una API creada con Python y Django para obtener y guardar los datos.', 'Además se tuvo qe aplicar conocimientos de Docker para poder containerizar la aplicación completa junto con su base de datos.'],
		tecnologias: ['React/Redux', 'HTML/CSS', 'Git', 'Django', 'Postgres', 'Docker'],
	},
	{
		title: 'this.Portafolio',
		ruta: ['portafolio1.png', 'portafolio2.png', 'portafolio3.png'],
		description: ['Proyecto para hacer mi página web (La que está viendo actualmente).', 'Se implementó con NextJS un framework de React para rear sitios web estaticos y los estilos fueron con CSS puro para afianzar los fundamentos.', 'Los conceptos principales aprendidos fueron los fundamentos de NextJS y CSS a un nivel un poco mayor aprendiendo a usar animaciones y transiciones.'],
		tecnologias: ['React', 'HTML/CSS', 'NextJS', 'Git'],
		link:'https://github.com/miguel12Y4/portafolio'
	},
	{
		title: 'Proyecto universitario: Creación de API REST para la gestión de notas de un colegio',
		description: ['Proyecto universitario correspodiente a la asignatura de Ingeniería de software.', 'Fué una API REST creada con Java y Spring Boot, MariaDB como base de datos relacional y Postman para probar la aplicación.'],
		tecnologias: ['Java', 'Spring Boot', 'MariaDB', 'Postman', 'Git'],
		link:'https://github.com/miguel12Y4/sistema-de-gestion-de-notas'
	}
]

export default function FirstPost() {

	const [valores, setValores] = useState([1, 2, 3, 4, 5])

	useEffect(() => {
	}, [])

	const handleClick = () => {
		setValores(v => v.concat(v.length + 1));
	}

	return (
		<Layout>
			<Head>
				<title>Portafolio</title>
			</Head>
			<section id="inicio" className={styles.container}>
				<div className={styles.principalFrente}>
					<div className={styles.containerH}>

						<h1>Hola, soy Miguel</h1>
						<h2>Desarrollador de software junior</h2>
						<p>Soy un apacionado por la tecnología, especialmente por el mundo web. Me encantaría encontrar un lugar donde pueda aprender cosas nuevas y crecer como desarrollador. Cualquier oferta de trabajo es bienvenida!</p>
					</div>
					<img className={styles.pc} src="/images/pc.png" />
				</div>
				<div>
					<img className={styles.bubble} src="/images/react.png" />
					<img className={styles.bubble} src="/images/js.png" />
					<img className={styles.bubble} src="/images/node-js.png" />
					<img className={styles.bubble} src="/images/docker.png" />
					<img className={styles.bubble} src="/images/git.png" />
					<img className={styles.bubble} src="/images/postgres.png" />
					<img className={styles.bubble} src="/images/redux.png" />
					<img className={styles.bubble} src="/images/css.png" />
					<img className={styles.bubble} src="/images/vs-code.png" />
					<img className={styles.bubble} src="/images/python.png" />
					<img className={styles.bubble} src="/images/github.png" />
					<img className={styles.bubble} src="/images/mysql.png" />
				</div>
			</section>

			<section id="proyectos" className={styles.containerProyecto}>
				<h2>Proyectos en los que he trabajado</h2>
				<div>
					<CardProyecto title={tec[0].title} description={tec[0].description} ruta={tec[0].ruta} tecnologias={tec[0].tecnologias}  link={tec[0].link}/>
					<CardProyecto title={tec[1].title} description={tec[1].description} ruta={tec[1].ruta} tecnologias={tec[1].tecnologias} link={tec[1].link}/>
					<CardProyecto title={tec[2].title} description={tec[2].description} ruta={tec[2].ruta} tecnologias={tec[2].tecnologias} link={tec[2].link}/>
				</div>
			</section>
			<section id="otros_proyectos" className={styles.containerProyecto}>
				<h2>Otros proyectos más pequeños</h2>
				<div>
					<CardProyecto img={false} title={tec[3].title} description={tec[3].description} ruta={tec[3].ruta} tecnologias={tec[3].tecnologias} link={tec[3].link}/>
				</div>
			</section>

			<section id="contacto" className={styles.sectionForm}>
				<div className={styles.containerForm}>
					<h2>Formulario de contacto</h2>

					<form name="contact"
						action="/"
						method="POST"
						netlify-honeypot="bot-field"
						data-netlify="true">
						<input type='hidden' name='contact'
							value='contact' />
						<p style={{ display: 'none' }}>
							<label>
								No llenar esto: <input name="bot-field" />
							</label>
						</p>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input type="text" name="nombre" id="nombre" required placeholder="Ingresa tu nombre" />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" required placeholder="Ingresa tu email" />
						</div>
						<div>
							<label htmlFor="mensaje">Mensaje</label>
							<textarea name="mensaje" id="mensaje" cols="30" rows="10" required placeholder="Ingresa tu mensaje"></textarea>
						</div>
						<input type="submit" value="Enviar" />
					</form>
				</div>
				<div className={styles.bgForm}>

				</div>
			</section>

		</Layout >
	)
}
