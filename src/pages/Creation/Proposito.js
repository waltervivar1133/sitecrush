import React from 'react';
import { ImgProposito, Logo } from '../../assets';
import { Link } from 'react-router-dom'

export const Proposito = () => {
  return (
    <section className="proposito">
      <div className="proposito__container">
        <img src={Logo} alt=""/>        
        <h3 className="proposito__subtitle">Soluciones innovadoras y veloces</h3>
        <h2 className="proposito__title">¿Cuáles son las variables que intervienen en el reto?</h2>

        <div className="proposito__grid_content">
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

        <Link to="/variables">
            <button className="variables__button">Regresar</button>
          </Link>
          <Link to="/tiempo" > 
            <button className="variables__button">
            Siguiente</button>
          </Link>
      </div>
    </section>
  )
}
