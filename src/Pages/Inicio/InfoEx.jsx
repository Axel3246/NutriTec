import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";


const InfoEx = () => {
  return (
    <>
      <Typography
        variant={{ xs: "h3", md: "h1" }}
        component="h1"
        gutterBottom
        sx={{
          mb: { xs: 2, md: 2},
          fontSize: { xs: "1.8rem", md: "3rem" },
          textAlign: { xs: "center", md: "left" },
          mt: 5,
        }}
      >
        Conoce más sobre {' '}
        <Typography
          component="span"
          sx={{
            color: "#1e88e5",
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "3.2rem" },
            fontFamily: "Encode Sans Condensed",
          }}
        >
          hábitos alimenticios {' '}🍴
        </Typography>
      </Typography>

      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="reminder-header">
          <Typography variant="h6">Recordatorio de 24 Horas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Aquí va el contenido del Recordatorio de 24 Horas. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="frequency-header">
          <Typography variant="h6">
            Frecuencia de Consumo de Alimentos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Aquí va el contenido de la Frecuencia de Consumo de Alimentos. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="macronutrients-header"
        >
          <Typography variant="h6">Macronutrientes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Aquí va el contenido de los Macronutrientes. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="micronutrients-header"
        >
          <Typography variant="h6">Micronutrientes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Aquí va el contenido de los Micronutrientes. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="appointment-header"
        >
          <Typography variant="h6">
            Agenda una cita con un Nutriólogo
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Agenda una cita con un nutriólogo de tu campus haciendo click <a href="https://sites.google.com/tec.mx/life2020/life-campus-monterrey/bienestar-estudiantil/nutrici%C3%B3n" target="_blank">aquí</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default InfoEx;
