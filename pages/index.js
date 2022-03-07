import React, { useEffect, useState } from 'react';

import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'

import styles from '../styles/home.module.css'

import ImgMovil from '../components/ImgMovil';
import CardProyecto from '../components/CardProyecto';
import CardSimple from '../components/CardSimple';


const tec = [
	{
		title: 'Sistema de gestión de inventario',
		ruta: '',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum corrupti repellendus, molestiae vel adipisci rerum maiores quas, sequi delectus numquam aspernatur perferendis iusto culpa earum repellat autem doloremque voluptate?',
		tecnologias: ['Postgres', 'Node', 'Git', 'Express', 'Javascript', 'HTML/Bootstrap']
	},
	{
		title: 'Sistema de etiquetado de imagenes',
		ruta: '',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum corrupti repellendus, molestiae vel adipisci rerum maiores quas, sequi delectus numquam aspernatur perferendis iusto culpa earum repellat autem doloremque voluptate?',
		tecnologias: ['React/Redux', 'HTML/CSS', 'Git', 'Django', 'Postgres', 'Docker']
	},
	{
		title: 'this.Portafolio',
		ruta: '',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum corrupti repellendus, molestiae vel adipisci rerum maiores quas, sequi delectus numquam aspernatur perferendis iusto culpa earum repellat autem doloremque voluptate?',
		tecnologias: ['React', 'HTML/CSS', 'NextJS', 'Git']
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi dolore at amet et quasi!',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum corrupti repellendus, molestiae vel adipisci rerum maiores quas, sequi delectus numquam aspernatur perferendis iusto culpa earum repellat autem doloremque voluptate?',
		tecnologias: ['React', 'HTML/CSS', 'NextJS', 'Git']
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi dolore at amet et quasi!',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum corrupti repellendus, molestiae vel adipisci rerum maiores quas, sequi delectus numquam aspernatur perferendis iusto culpa earum repellat autem doloremque voluptate?',
		tecnologias: ['React', 'HTML/CSS', 'NextJS', 'Git']
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
				<title>Mi primer post</title>
			</Head>
			<section id="inicio" className={styles.container}>
				<div className={styles.principalFrente}>
					<div className={styles.containerH}>

						<h1>Hola, soy Miguel</h1>
						<h2>Desarrollador de software junior</h2>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, nesciunt vel. Vel omnis natus deserunt necessitatibus? Ut est quia voluptates.</p>
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
					<CardProyecto title={tec[0].title} description={tec[0].description} ruta={tec[0].ruta} tecnologias={tec[0].tecnologias} />
					<CardProyecto title={tec[1].title} description={tec[1].description} ruta={tec[1].ruta} tecnologias={tec[1].tecnologias} />
					<CardProyecto title={tec[2].title} description={tec[2].description} ruta={tec[2].ruta} tecnologias={tec[2].tecnologias} />
				</div>
			</section>
			<section id="otros_proyectos" className={styles.containerProyecto}>
				<h2>Otros proyectos más pequeños</h2>
				<div>
					<CardProyecto img={false} title={tec[3].title} description={tec[3].description} ruta={tec[3].ruta} tecnologias={tec[3].tecnologias} />
					<CardProyecto img={false} title={tec[4].title} description={tec[4].description} ruta={tec[4].ruta} tecnologias={tec[4].tecnologias} />
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
