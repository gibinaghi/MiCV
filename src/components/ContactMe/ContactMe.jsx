import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
    
  return (
    <div id="contact">
        <h2>¡Contáctame!</h2>

        <div className="container contact-container">
            <div className="options-contact">
                <article className="option-contact">
                    <i class="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                    <h5>gimenabinaghi@gmail.com</h5>
                    <a href="mailto:gimenabinaghi@gmail.com" target='_blank' rel="noreferrer">Envíame un correo</a>
                </article>
                <article className="option-contact">
                    <i class="fa-brands fa-linkedin"></i>
                    <h4>LinkedIn</h4>
                    <h5>Gimena Binaghi LinkedIn</h5>
                    <a href="https://www.linkedin.com/in/yesica-nicole-gonzalez/" target='_blank' rel="noreferrer">Visita mi LinkedIn</a>
                </article>
            </div>
        </div>
    </div>
  )
}

export default ContactMe;