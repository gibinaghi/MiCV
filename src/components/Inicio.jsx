import * as React from 'react';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Stack from '@mui/material/Stack';
import { saveAs } from "file-saver";
import Grid from '@mui/material/Grid';

function Inicio() {

  //ver esto no funciona
  const saveFile = () => {
    saveAs(
      "/assets/micv.pdf",
      "CV-Binaghi,María Gimena.pdf"
    );
  };

  const boton = {
    backgroundColor: '#4db6ac',
    color: '#e0f2f1',
    borderRadius: '10px',
};

const icono = {
  margin : '5px',
}

  return (
    <>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h2>¡Hola! <span> Soy Gimena Binaghi </span></h2>
            <p> Desarrolladora backend y matemática </p>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label" onClick={saveFile}  sx={boton}>
                  Descargar CV
                  <CloudDownloadIcon sx={icono}/>
                </Button>
            </Stack>
          </Grid>

          <Grid item xs={4} src='/assets/img/foto.png'>
            aca la imagen q no aparece!!!!!
          </Grid>
        </Grid>

        
    </>
  )
}

export default Inicio