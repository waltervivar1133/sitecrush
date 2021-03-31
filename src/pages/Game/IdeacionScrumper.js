import React from 'react'
import { Link } from 'react-router-dom'
import { Logo,TimeIcon, ChangeIcon,ImgIdeacion } from '../../assets'

export const IdeacionScrumper = () => {
  return (

    <div>

      <div className="ideacion__header">
        <img src={Logo} alt="" width="200px" height="auto" className="logo"/>
        <h2 className="ideacion__title_head">!INSPIRATE!</h2>
        <div className="time">
          <img src={TimeIcon} alt="" />
          <p>05: 00</p>
        </div>
      </div>
      <section className="ideacionscrumper">
        <div className="ideacionscrumper__container">
          <div className="ideacionscrumper__wrapper">
            <div>
              <h3 className="ideacionscrumper__subtitle">Imagina que <b>las ventas fueran una rueda...</b></h3>
              <img src={ImgIdeacion} alt=""/>
              <h2 className="ideacionscrumper__title">¿Como las ventas podrían <b>rodar para incrementar la rentabilidad?</b>  </h2>
            </div>
          </div>
         
          <div className="ideacionscrumper__content_button">
            <button className="ideacionscrumper__change"> <img src={ChangeIcon} alt=""/> Cambiar pregunta</button>
          </div>
          <div className="ideacionscrumper__input">
            <textarea  
                className="ideacionscrumper__textarea"
                name="reto"
                cols="40" 
                rows="3"
                placeholder="¿Que idea se te viene a la cabeza?"
            ></textarea>
            <div>
             <p>0/800</p>
            </div>
        </div>

        <Link to="/ideacion">
            <button className="ideacionscrumper__button">Regresar</button>
          </Link>
          <Link to="/score" > 
            <button className="ideacionscrumper__button">
            Siguiente</button>
          
          </Link>
          <p className="ideacionscrumper__error">Debes escribir como minimo 100 caracteres</p>
        </div>
       
      </section>
      
    </div>


  )
}
