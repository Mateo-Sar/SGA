import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Paper from '@mui/material/Paper';

 function FAQ() {
  const id = React.useId();
  return (
    <div>
    <Paper elevation={2} sx={{p:3,border:4,borderColor:"divider",borderRadius:9}}>
        <Typography variant="h6" xs={{mb:1}}>Preguntas Frecuentes</Typography>
        <Typography variant="body2" color='text.secondary' sx={{mb:1}}>Ayuda para utilizar el Sistema de Gestion Academica</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">¿Como se regustra un alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Desde el formulario de alumnos , completa el legajo, nombre, carrera y correo electronico.Luego selecciona guardar
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">¿Como puedo modificar los datos de algun alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Busca al alumno en el listado y selecciona Editar.El formulario se completara con sus datos para que pueda modificar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">¿Puedo eliminar un alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si.Desde el listado, selecciona Eliminar.Antes de confirmar,verifica que estes trabajando con el alumno correcto.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
    </div>
  );
}

export default FAQ;