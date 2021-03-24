import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets'
import { Loader } from '../../components/Loader'


export const SalaEspera = () => {
  return (


    <div>
      
      <img src={Logo} alt="" width="200px" height="auto" className="logo"/>
      <section className="salaespera">
        <div className="salaespera__container">
        <h2 className="salaespera__title">ESPEREMOS A QUE ENTREN TODOS...</h2>
        <h3 className="salaespera__reto">4 JUGADORES</h3>
        <div className="salaespera__list">
          <ul>
            <li><p>1.- Oliver</p></li>
            <li><p>2.- Oliver</p></li>
            <li><p>3.- Oliver</p></li>
            <li><p>4.- Oliver</p></li>
          </ul>
         
        </div>
        <div className="salaespera__espera">
        <Loader/>
        <h4 className="salaespera__anfitrion">ESPERANDO A QUE EL ANFITRION COMIENCE CRUSH :)</h4>

        </div>
        <Link to="/nombre">
            <button className="nombreinicial__button">Regresar</button>
          </Link>
          <Link to="/ideacion" > 
            <button className="nombreinicial__button">
            Siguiente</button>
          </Link>
        </div>
        
      </section>
    </div>
  )
}
