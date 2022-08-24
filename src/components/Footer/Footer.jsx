import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';

const Footer = () => {
  const color = {
    color: '#f5f5f5',
  }

  return (
    <footer>

        <ul style={{listStyleType: 'none'}} className="footer-list">
            <li><a href="#main">Inicio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#experience">Experiencia</a></li>
        </ul>

        <div className="footer-social">
        <IconButton href="mailto:gimenabinaghi@gmail.com" target='_blank' >
            <EmailIcon sx={color}/>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/gimenabinaghi/" target='_blank'>
            <GitHubIcon  sx={color}/>
        </IconButton>
        </div>
        <div className="footer-copy">
            <small>&copy; Gimena Binaghi - Todos los derechos reservados.</small>
        </div>   
    </footer>
  )
}

export default Footer;