import React from 'react';
import { ImgProposito, Logo } from '../../assets';
import { Link } from 'react-router-dom'
import { ProgressBar } from '../../components/ProgressBar'

export const Proposito = () => {
  return (
    <section className="proposito">
      <div className="proposito__container">
        <img src={Logo} alt="logo" className="proposito__logo m-0"/>        
        <h3 className="proposito__subtitle m-0">Soluciones innovadoras y veloces</h3>
        <ProgressBar/>
        <h2 className="proposito__title">Quiero resolver el problema con una perspectiva...</h2>

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
