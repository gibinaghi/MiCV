import React from 'react';
import './Main.css';
import foto from '../../assets/img/foto.png';
import CV from '../../assets/micv.pdf';

const Main = () => {
  return (
    <div id="main">
        <div className="main-left">
            <div className="main-name">
                <span>¡Hola! Soy</span>
                <span>Gimena Binaghi</span>
                <span>Desarrolladora Backend | Matemática </span>
            </div>
            <a href={CV} className="main-button">Descargar CV</a>
        </div>
        <div className="main-right">
            <div className="circle">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">
              <img src={foto} alt="Img Character" className="img-circle"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main;