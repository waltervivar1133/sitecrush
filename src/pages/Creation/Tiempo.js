import React from 'react'
import {  Logo } from '../../assets';
import { Link } from 'react-router-dom'
import { ProgressBar } from '../../components/ProgressBar'

export const Tiempo = () => {
  return (
    <section className="tiempo">
      <div className="tiempo__container">
      <img src={Logo} alt="logo" className="tiempo__logo m-0"/>  
      <h3 className="proposito__subtitle m-0">Soluciones innovadoras y veloces</h3>      
      <ProgressBar/>
        <h3 className="tiempo__subtitle m-0">Soluciones innovadoras y veloces</h3>
        <h2 className="tiempo__title">¿Cuánto tiempo quieres trabajar en este reto?</h2>
        <div className="tiempo__change">
          <boton className="tiempo__input">
            -
          </boton>
          <div className="tiempo__number">
           <p>05:00</p>
          </div>
          <boton className="tiempo__input">
            +
          </boton>
        </div>
        <Link to="/proposito">
            <button className="variables__button">Regresar</button>
          </Link>
          <Link to="/compartir" > 
            <button className="variables__button">
            Siguiente</button>
          </Link>
      </div>
    </section>
  )
}
