import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import './styles.css'


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
          El Recordatorio de 24 Horas se refiere a un método de recolección de datos utilizado para obtener información sobre la ingesta alimentaria 
          de una persona durante un período de 24 horas. Es ampliamente utilizado en nutrición y en la evaluación dietética individual. 
          Aprende más sobre el Recordatorio de 24 Horas <a className="link" href="https://www.youtube.com/watch?v=-DsiGECW8qQ" target="_blank">aquí</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="frequency-header">
          <Typography variant="h6">
            Formulario de Frecuencia de Alimentos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
          El formulario de Frecuencia de Alimentos es una herramienta utilizada en la evaluación 
          dietética para recopilar información sobre la frecuencia con la que una persona consume ciertos alimentos y grupos de alimentos en su dieta.
          Aprende más sobre el Formulario de Frecuencia de Alimentos <a className="link" href="https://www.youtube.com/watch?v=XJV3yZyhgAE" target="_blank">aquí</a>.
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
          Los macronutrientes son los componentes esenciales de la dieta que proporcionan la mayor parte de la energía necesaria para el funcionamiento del organismo. 
          Estos nutrientes se dividen en tres categorías: carbohidratos, proteínas y grasas. 
          Aprende más sobre Macronutrientes <a className="link" href="https://www.youtube.com/watch?v=smPR215SRzM" target="_blank">aquí</a>.
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
          Los micronutrientes son nutrientes esenciales que el cuerpo necesita en pequeñas cantidades para mantener una buena salud y funcionar correctamente.
          Aprende más sobre Micronutrientes <a className="link" href="https://www.youtube.com/watch?v=-3rD7BvmZzU" target="_blank">aquí</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="appointment-header"
        >
          <Typography variant="h6">
            Plato del Buen Comer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
          El Plato del Buen Comer es una herramienta gráfica diseñada por el Gobierno de México para promover una alimentación saludable y equilibrada y funciona como 
          una guía visual que ayuda a las personas a planificar sus comidas diarias de una manera balanceada. <br/> <br/>
          Consulta el Plato del Buen Comer <a className="link" href="https://www.zwan.com.mx/wp-content/uploads/2013/09/plato.png" target="_blank">aquí</a>. <br/>
          ¿Quieres informarte un poco más? Entra <a className="link" href="https://www.gob.mx/siap/articulos/el-plato-del-bien-comer" target="_blank">aquí</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="appointment-header"
        >
          <Typography variant="h6">
            Jarra del Buen Beber
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
          La Jarra del Buen Beber es una herramienta gráfica diseñada por el Gobierno de México para promover el consumo de agua y otras bebidas saludables.
          Esta guía visual representa una jarra que se divide en diferentes secciones con un tipo específico de bebida y la cantidad relativa que se debe consumir para una hidratación adecuada.<br/><br/>
          Consultala Jarra del Buen Beber <a className="link" href="https://www.gob.mx/cms/uploads/image/file/531016/Captura.PNG" target="_blank">aquí</a>. <br/>
          ¿Quieres informarte un poco más? Entra <a className="link" href="https://www.gob.mx/issste/articulos/beneficios-de-la-jarra-del-buen-beber" target="_blank">aquí</a>
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
            Agenda una cita con un nutriólogo de tu campus haciendo click <a className="link" href="https://sites.google.com/tec.mx/life2020/life-campus-monterrey/bienestar-estudiantil/nutrici%C3%B3n" target="_blank">aquí</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default InfoEx;
