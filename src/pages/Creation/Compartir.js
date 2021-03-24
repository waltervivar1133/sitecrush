import React from 'react'
import {  Logo, CopyIcon } from '../../assets';
import { Link } from 'react-router-dom'

export const Compartir = () => {
  return (
    <section className="compartir">
        <div className="compartir__container">
          <img src={Logo} alt=""/>        
          <h3 className="tiempo__subtitle">Soluciones innovadoras y veloces</h3>
          <h2 className="tiempo__title">Comparte el siguiente enlace con los participantes</h2>

          <div className="compartir__enlace_container">
              <div className="compartir__content">
                <div className="compartir__text">
                  <p>COPIA ESTO</p>

                  <span>https://www.crush2.ludik.pe/DVhwxB/388</span>
                </div>
                <div className="compartir__url">
                  
                    <img src={CopyIcon} alt=""/>
                </div>
              </div>
          </div>
          <Link to="/tiempo">
            <button className="variables__button">Regresar</button>
          </Link>
          <Link to="/nombre" > 
            <button className="variables__button">
            Siguiente</button>
          </Link>
        </div>
    </section>
  )
}
