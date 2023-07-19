import React from "react";
import {
  Grid,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Testimonials from "./Testimonials";
import Grupos from "./Grupos";
import InfoEx from "./InfoEx";
import tec1 from "../../assets/Landing/tec1.jpeg";


const Inicio = () => {
  return (
    <>
      <Navbar activePage="Inicio" />
      <Container>
        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{
            mb: { xs: "2rem", md: "3rem" },
            mt: { xs: "0.5rem", md: "1rem" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant={{ xs: "h3", md: "h1" }}
              component="h1"
              gutterBottom
              sx={{
                mb: { xs: 1, md: 1 },
                fontSize: { xs: "2.2rem", md: "3.5rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              ¡Te damos la bienvenida <br></br>a Nutri
              <Typography
                component="span"
                sx={{
                  color: "#8bc34a",
                  fontWeight: "bold",
                  fontSize: { xs: "2.4rem", md: "3.8rem" },
                  fontFamily: "Encode Sans Condensed",
                }}
              >
                TEC
              </Typography>
              ! ✨
            </Typography>
            <Typography
              variant={{ xs: "body1", md: "h4" }}
              color="textSecondary"
              paragraph
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Una página creada por alumnos del{" "}
              <Typography
                component="span"
                sx={{
                  color: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  fontFamily: "Encode Sans Condensed",
                }}
              >
                TEC
              </Typography>{" "}
              con el fin de que encuentres lugares con comida saludable y
              barata.
            </Typography>

            {/* Center the button for xs, align left for md */}
            <Grid container justifyContent={{ xs: "center", md: "flex-start" }}>
              <Button
                href="/comunidad"
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#8bc34a",
                  mb: { xs: 1, md: 0 },
                }}
              >
                ¡Ir a la Comunidad!
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { md: "flex" }, justifyContent: { md: "flex-end" } }}
          >
            <img
              src={tec1}
              alt="Imagen de Inicio"
              style={{ width: "100%", height: "80%", borderRadius: 10 }}
            />
          </Grid>
        </Grid>

        {/*-----------GRUPOS-----------*/}

        <Typography
          variant={{ xs: "h3", md: "h1" }}
          component="h1"
          gutterBottom
          sx={{
            mb: { xs: 1, md: 1 },
            fontSize: { xs: "1.8rem", md: "3rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Por una mejor{" "}
          <Typography
            component="span"
            sx={{
              color: "#1e88e5",
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "3rem" },
              fontFamily: "Encode Sans Condensed",
            }}
          >
            alimentación
          </Typography>{" "}
          😎
        </Typography>

        <Typography
          variant={{ xs: "body1", md: "h4" }}
          color="textSecondary"
          paragraph
          sx={{
            fontSize: { xs: "0.9rem", md: "1.3rem" },
            textAlign: { xs: "center", md: "left" },
            mb: 3,
          }}
        >
          Queremos que los hábitos alimenticios de comunidad{" "}
          <Typography variant="span" sx={{ color: "#1e88e5", fontWeight: "bold" }}>
            TEC{" "}
          </Typography>{" "}
          mejoren. Es por eso que contamos con la ayuda de los siguientes
          grupos.
        </Typography>
        <Grupos />

        {/*-----------TESTIMONIALS-----------*/}
        <Typography
          variant={{ xs: "h3", md: "h1" }}
          component="h1"
          gutterBottom
          sx={{
            mb: { xs: 1, md: 1 },
            fontSize: { xs: "1.8rem", md: "3rem" },
            textAlign: { xs: "center", md: "left" },
            mt: 5,
          }}
        >
          ¿Qué dice la comunidad de Nutri
          <Typography
            component="span"
            sx={{
              color: "#8bc34a",
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "3.2rem" },
              fontFamily: "Encode Sans Condensed",
            }}
          >
            TEC
          </Typography>
          ? 🤔
        </Typography>

        <Typography
          variant={{ xs: "body1", md: "h4" }}
          color="textSecondary"
          paragraph
          sx={{
            fontSize: { xs: "0.9rem", md: "1.3rem" },
            textAlign: { xs: "center", md: "left" },
            mb: 3,
          }}
        >
          Conoce algunos de los testimonios que la comunidad{" "}
          <Typography variant="span" sx={{ color: "#1e88e5", fontWeight: "bold" }}>
            TEC{" "}
          </Typography>{" "}
          ha dejado al usar la página.{" "}
        </Typography>

        {/*--------------QUE DICE LA COMUNIDAD-------------*/}
        <Testimonials />

        {/*--------------MÁS INFORMACIÓN (ACCORDIONES)-------------*/}
          <InfoEx/>

      </Container>
      <Footer />
    </>
  );
};

export default Inicio;
