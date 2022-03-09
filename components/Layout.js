import React, { useState } from 'react';
import styles from '../styles/layout.module.css';


export default function Layout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(e => !e)
  }

  return (
    <>
      <div className={styles.containerHeader}>
        <header className={styles.header}>
          <div className={styles.containerNav}>
            <span className={styles.movil + " " + styles.oculto}><img src="/iconos/hamburguesa.png" alt="" /></span>
            <div className={styles.logo}>
              <img src="/yo.jpeg" alt="" />
            </div>
            <span className={styles.movil} onClick={handleNav}>
              {openNav ?
                <img className= {styles.btnAnimX} src="/iconos/x.png" alt="" />
                : <img className= {styles.btnAnimO} src="/iconos/hamburguesa.png" alt="" />}
            </span>
          </div>
          <nav>
            {openNav ?
              <>
                <ul className={styles.navResponse}>
                  <li><a href="#inicio">Sobre mí</a></li>
                  <li><a href="#proyectos">Proyectos</a></li>
                  <li><a href="#otros_proyectos">Otros proyectos</a></li>
                  <li><a href="#contacto">Contacto</a></li>
                </ul>
              </>
              : <></>}
            <ul className={styles.navOriginal}>
              <li><a href="#inicio">Sobre mí</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#otros_proyectos">Otros proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>
      </div>
      {children}
      <footer className={styles.footer}>
        <div>
          <span>© Miguel Saavedra Aravena</span>
        </div>
        <div>
          <a href="https://github.com/miguel12Y4">
            <img src="/images/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/miguel12y4/">
            <img src="/images/linkedin.png" alt="" />
          </a>
        </div>

        <div className={styles.datos}>
          <div>
            <img src="/iconos/phone.png" alt="" />
            <a href="tel:+56931204154">+56-931204154</a>
          </div>
          <div>
            <img src="/iconos/email.png" alt="" />
            <a href="mailto:miguel12y4@gmail.com">miguel12y4@gmail.com</a>
          </div>
        </div>

      </footer>
    </>
  )
}
