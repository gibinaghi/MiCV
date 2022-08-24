import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ContactMe.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';

export default function Contacto() {
  const color = {
    color: '#f5f5f5',
  }

  return (
    <div id="contact">
        <h2>¡Contáctame!</h2>
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <article className="option-contact">
                      <h4>Email</h4>
                      <h5>gimenabinaghi@gmail.com</h5>
                      <IconButton href="mailto:gimenabinaghi@gmail.com" target='_blank' >
                        <EmailIcon sx={color}/>
                      </IconButton>
                  </article>
          </Grid>
          <Grid item xs={6}>
          <article className="option-contact">
                      <h4>LinkedIn</h4>
                      <h5>Gimena Binaghi LinkedIn</h5>
                      <IconButton href="https://www.linkedin.com/in/gimenabinaghi/" target='_blank'>
                        <GitHubIcon  sx={color}/>
                      </IconButton>
                  </article>
          </Grid>
        </Grid>
      </Box>
       
    </div>
    
  );
}