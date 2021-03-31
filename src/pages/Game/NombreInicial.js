import React from 'react'
import {  ImgProposito, Logo } from '../../assets';
import { Link } from 'react-router-dom'

export const NombreInicial = () => {
  return (
    <section className="nombreinicial">
        <div className="nombreinicial__container">
        <img src={Logo} alt="logo" className="nombreinicial__logo m-0"/>        
          <h3 className="nombreinicial__subtitle m-0">Soluciones innovadoras y veloces</h3>
          <h2 className="nombreinicial__title">¿Cuál es tu nombre?</h2>
          <h3 className="nombreinicial__reto">Con este nombre o nickname aparecerás durante toda la sesión</h3>
          <div className="nombreinicial__input">
            <input type="text"
            className="nombreinicial__inputtext"
            placeholder="Ej: Da Vinci"/>
          </div>
          <h2 className="nombreinicial__title">Quiero aportar màs como</h2>
          <div className="nombreinicial__grid_content">
          <div className="proposito__card">
            <div className="proposito__card_flex">
              <img src={ImgProposito} alt="proposito"/>
              <h3>Ludika</h3>
            </div>
            
          </div>
          <div className="proposito__card">
            <div className="proposito__card_flex">
              <img src={ImgProposito} alt="proposito"/>
              <h3>Ludika</h3>
            </div>
            
          </div>
          </div>
          <Link to="/compartir">
            <button className="nombreinicial__button">Regresar</button>
          </Link>
          <Link to="/salaespera" > 
            <button className="nombreinicial__button">
            Siguiente</button>
          </Link>
        </div>

        
    </section>
  )
}
