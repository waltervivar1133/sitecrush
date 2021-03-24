import React from 'react';
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/index'

export const Reto = () => {
  return (
    <section className="reto">
        <div className="reto__container">
          <img src={Logo} alt="logo-crush" className="reto__logo"/>   
          <h3 className="reto__subtitle">Soluciones innovadoras y veloces</h3>
          <h2 className="reto__title">¿Cuál es el reto a resolver?</h2>
          <div className="reto__input">
            <label htmlFor="reto" className="reto__label">Como podriamos</label>
            <textarea  
                className="reto__textarea"
                name="reto"
                cols="40" 
                rows="3"
                placeholder="Ej: Resolver igualdad y paz en el mundo"
            ></textarea>
        </div>
          <Link to="/">
            <button className="reto__button">Regresar</button>
          </Link>
          <Link to="/variables" > 
            <button className="reto__button">
            Siguiente</button>
          </Link>

          
        </div>
      
    </section>
  )
}
