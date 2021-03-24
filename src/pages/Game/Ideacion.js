import React from 'react'
import { Link } from 'react-router-dom'
import { Logo,TimeIcon } from '../../assets'

export const Ideacion = () => {
  return (

    <div>

      <div className="ideacion__header">
        <img src={Logo} alt="" width="200px" height="auto" className="logo"/>
        <h2 className="ideacion__title">!INSPIRATE!</h2>
        <div className="time">
          <img src={TimeIcon} alt=""/>
          <p>05: 00</p>
        </div>
      </div>
      <section className="ideacion">
        <div className="ideacion__container">
          <div className="ideacion__textnew">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tellus, nisl justo pellentesque. Massa dui semper.</p>
          </div>
          <h2 className="ideacion__title">Si pudieras sustituir algun elemento de la idea ¿Como seria la nueva idea?</h2>

          <div className="reto__input">
          
            <textarea  
                className="reto__textarea"
                name="reto"
                cols="40" 
                rows="3"
                placeholder="¿Que idea se te viene a la cabeza?"
            ></textarea>
        </div>

        <Link to="/salaespera">
            <button className="nombreinicial__button">Regresar</button>
          </Link>
          <Link to="/score" > 
            <button className="nombreinicial__button">
            Siguiente</button>
          </Link>
        </div>
       
      </section>
      
    </div>


  )
}
