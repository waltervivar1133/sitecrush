import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/index'
export const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <img src={Logo} alt="logo-crush" className="home__logo"/>
        <h3 className="home__subtitle">Soluciones innovadoras y veloces</h3>
        <p className="home__text">La herramienta que te ayudará a generar más de <br/>
        <b>50 ideas en menos de 10 minutos</b></p>
      <Link to="/reto">
        <button className="home__button">
          Continuar
        </button>
      </Link>
      </div>
    </section>
  )
}
