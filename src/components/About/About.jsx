import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about">
        <div className="title">
            <h2>Sobre Mi</h2>
        </div>

        <div className="container about-container">
                <div className="about-text">
                    <p> Soy matemática y estoy dando mis primeros
                        pasos en el área de desarrollo. Cuento con
                        conocimientos básicos de programación e inglés.
                        Aspiro a poder desarrollarme en un equipo de
                        trabajo donde pueda incorporar mis
                        conocimientos a un nuevo proyecto. Soy una
                        persona responsable, dinámica, emprendedora,
                        con empatía y que siempre busca aprender algo
                        nuevo.
                    </p>
                </div>
        </div>
    </div>
  )
}

export default About;