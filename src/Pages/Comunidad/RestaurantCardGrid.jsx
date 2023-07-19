import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import { Card, CardContent, Typography, CircularProgress, Chip, Container, Rating, Grid, CardMedia, CardActionArea} from '@mui/material';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const RestaurantCardGrid = () => {
  const navigate = useNavigate(); // Add useNavigate hook
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coll = collection(database, 'Restaurantes');
        const q = query(coll, orderBy("id"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            nombre: doc.data().nombre,
            rating: doc.data().rating,
            tipo: doc.data().tipo,
            url: doc.data().imageURL,
            recom: doc.data().recom
          }));

          setData(data);
          setLoading(false); // Set loading to false once the data is fetched
        });

        // Cleanup the snapshot listener when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false in case of an error
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    console.log(`Pasare el id ${id}`)
    navigate(`/restaurante/${id}`);
  };

  if (loading) {
    return (
      <>
       <Navbar activePage="Comunidad" />
        <Container
          sx={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress color="secondary" />
          <Typography variant="body1" sx={{ ml: 2 }}>
            Cargando...
          </Typography>
        </Container>
      </>
    );
  } else {
  return (
    <>
    <Navbar activePage="Comunidad" />
        <Container>
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
          Nutre
          <Typography
            component="span"
            sx={{
              color: "#8bc34a",
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "3rem" },
              fontFamily: "Encode Sans Condensed",
            }}
          >
            TEC
          </Typography>{" "}
          🌟
        </Typography>

        <Typography
          variant={{ xs: "body1", md: "h4" }}
          color="textSecondary"
          paragraph
          sx={{
            fontSize: { xs: "0.9rem", md: "1.3rem" },
            textAlign: { xs: "center", md: "left" },
            mb: 2,
          }}
        >
          ¡Hora de empezar a formar hábitos de alimentación saludable! Aquí encontrarás todas las opiniones de la comunidad{" "}
          <Typography variant="span" sx={{ color: "#1e88e5", fontWeight: "bold" }}>
            TEC{" "}
          </Typography>{" "}
          y los lugares donde puedes comer saludablemente.
        </Typography>
          
          
         {/*-----------GRUPOS-----------*/}

         
        <Grid container alignItems="center" spacing={2} sx={{mb: {xs: "2rem", md:"3rem"}}}>
        {data.map((restaurant) => (
          <Grid item xs={6} md={4} key={restaurant}>
            <Card key={restaurant.id}>
            <CardActionArea onClick={() => handleCardClick(restaurant.id)}>
                    <CardMedia
                      component="img"
                      image={restaurant.url}
                      alt={restaurant.nombre}
                      sx={{ objectFit: 'cover', height: { xs: 150, s: 180, m: 180, lg: 180, xl: 180 }, mt: 1, backgroundColor: 'transparent' }}
                    />
              <CardContent>
              <Chip
              color="success"
              label={restaurant.tipo}
              style={{ borderRadius: 10 }}
              sx={{ borderRadius: 10, marginBottom: 1, mr: 1 }}
                      />
                      <br></br>
                      {restaurant.recom === 'Personalizable' ? 
                      <Chip
                          label={restaurant.recom}
                          style={{ borderRadius: 10 }}
                          color='success'
                          sx={{ marginBottom: 1, backgroundColor: '#1e88e5' }}
                        />
                      : null}
                      {restaurant.recom === 'Saludable' || restaurant.recom === "Muy Saludable" ? 
                      <Chip
                          label={restaurant.recom}
                          style={{ borderRadius: 10 }}
                          color='success'
                          sx={{ marginBottom: 1, backgroundColor: '#8bc34a'}}
                        /> 
                        : null
                      }
                      {restaurant.recom !== 'Saludable' && restaurant.recom !== 'Personalizable' && restaurant.recom !== "Muy Saludable"  ? 
                      <Chip
                          label={restaurant.recom}
                          style={{ borderRadius: 10 }}        
                          sx={{ marginBottom: 1, backgroundColor: '#fdd835' }}
                        />
                        : null
                      }

                <Typography variant="h6" sx={{fontWeight: "bold"}}>{restaurant.nombre}</Typography>
                <Rating name="read-only" value={restaurant.rating} readOnly />
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          ))}
        </Grid>
        </Container>
        <Footer/>
      </>
      )}

  };

export default RestaurantCardGrid;
