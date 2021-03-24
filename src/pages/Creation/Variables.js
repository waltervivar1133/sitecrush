import React from 'react'
import { Link } from 'react-router-dom'
import { CancelIcon, Logo } from '../../assets/index'


export const Variables = () => {
  return (
    <section className="variables">
      <div className="variables__container">
        <img src={Logo} alt="logo-crush" className="variables__logo"/>
         <h3 className="variables__subtitle">Soluciones innovadoras y veloces</h3>
         <h2 className="variables__title">¿Cuáles son las variables que intervienen en el reto?</h2>
         <h3 className="variables__reto">Reto: Incrementar las ventas de la empresa</h3>
         <div className="variables__content_input">
         <div className="variables__input">
            <input 
            type="text" 
            className="variables__inputtext"
            />
            <button className="variables__agregar" >Agregar</button>
          
         </div>
          <div>
          <h4 className="variables__count">4 de 4</h4>
          </div>

         </div>
         <div className="variables__grid__variables">
            <div className="variables__card">
                <input 
                type="text"
                placeholder="Variable 1"
                />
                <img src={CancelIcon} alt="icon-cancel"/>
            </div>
            <div className="variables__card">
                <input 
                type="text"
                placeholder="Variable 1"
                />
                <img src={CancelIcon} alt="icon-cancel"/>
            </div>
            <div className="variables__card">
                <input 
                type="text"
                placeholder="Variable 1"
                />
                <img src={CancelIcon} alt="icon-cancel"/>
            </div>
            <div className="variables__card">
                <input 
                type="text"
                placeholder="Variable 1"
                />
                <img src={CancelIcon} alt="icon-cancel"/>
            </div>
         </div>
        <Link to="/reto">
            <button className="variables__button">Regresar</button>
          </Link>
          <Link to="/proposito" > 
            <button className="variables__button">
            Siguiente</button>
          </Link>
      </div>
    </section>
  )
}
