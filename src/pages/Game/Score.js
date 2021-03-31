import React from 'react';
import { Link } from 'react-router-dom'
import { Logo,ImgMagic, ImgPrimerPuesto, ImgTercerPuesto ,ImgSegundoPuesto, RightIcon } from '../../assets'

export const Score = () => {
  return (
<>
    <div className="ideacion__header">
      <img src={Logo} alt="" width="200px" height="auto" className="logo"/>
    </div>
    <div className="score">
      <div className="score__container">
        <h1 >¡Felicitaciones!</h1>
        <div>
          <h2>Se generaron</h2>
          <div className="score__ideas">
            <p>170</p>
            <img src={ImgMagic} alt="img-magic"/>
          </div>
          <h4 className="score__text">ideas</h4>
          <div className="score__content_puestos">
            <div className="score__nombres">
              <p className="second">Lu</p>
              <p>Oliver</p>
              <p className="tercer">Mafer</p>
            </div>
            <img src={ImgSegundoPuesto} alt=""/>
            <img src={ImgPrimerPuesto} alt=""/>
            <img src={ImgTercerPuesto} alt=""/>
          </div>
        </div>
        <div className="score__buttons_content">
        <Link to="/ideacionscrumper" > 
          <button className="score__button">Descargar en excel</button>
        </Link>
        <Link to="/">
          <button className="score__return">Volver a jugar <img src={RightIcon} alt=""/></button>
        </Link>
        </div>
      
       
      </div>
      
  </div>
</>
  )
}
