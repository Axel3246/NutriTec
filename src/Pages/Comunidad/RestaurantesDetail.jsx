import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getFirestore, query, where, onSnapshot } from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Container,
  Avatar,
  Rating,
  Divider,
  Chip,
  Grid,
  Button
} from '@mui/material';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RestaurantesDetail = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        console.log('Fetching restaurant data for ID:', id);
        const restaurantDocRef = doc(database, 'Restaurantes', id);
        const restaurantDocSnapshot = await getDoc(restaurantDocRef);

        if (restaurantDocSnapshot.exists()) {
          const restaurantData = restaurantDocSnapshot.data();
          setRestaurantData(restaurantData);
        } else {
          console.log('Restaurant not found for ID:', id);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const commentsQuery = query(collection(database, `Restaurantes/${id}/Comentarios`));
        const unsubscribe = onSnapshot(commentsQuery, (querySnapshot) => {
          const commentsData = querySnapshot.docs.map((doc) => doc.data());
          setComments(commentsData);
        });
        console.log(comments);
        // Cleanup the snapshot listener when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchRestaurantData();
    fetchComments();
  }, [id]);

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
  }

  if (!restaurantData) {
    return <Typography variant="body1">Restaurant not found.</Typography>;
  }

  // Separate comments into "LiFe Tec" and "Comunidad Tec" sections
  const lifeTecComments = comments.filter((comment) => comment.partede === 'LiFe Tec' || comment.partede === 'Estudiante LNB');
  const comunidadTecComments = comments.filter((comment) => comment.partede === 'Comunidad Tec');

  return (
    <>
      <Navbar activePage="Comunidad" />
      <Container >
      <Button size="large" type="submit" variant="filled" color="primary" sx={{ height: { md: 40 }, ml: -2, mb: { md: -1 }, mt: 1 }} href="/comunidad">
          <ArrowBackIcon />
          Regresar
        </Button>
        <Card sx={{ mb: 2, mt: 2 }}>
  <CardContent>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={3}>
        <Avatar src={restaurantData.imageURL} alt={restaurantData.nombre} sx={{ width: '25%', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {restaurantData.nombre}
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Rating name="read-only" value={restaurantData.rating} readOnly sx={{mt:{XS: 0, md: 2}}} />
      </Grid>
    </Grid>
  </CardContent>
</Card>

      {console.log(lifeTecComments)}

      {/* LiFe Tec Comments Section */}
      {lifeTecComments.length > 0 && (
        <>
          <Typography variant="h6" mb={1} sx={{ fontWeight: 'bold' }}>
            La comunidad de {' '}<Typography
                component="span"
                variant='h6'
                sx={{
                  color: "#8bc34a",
                  fontWeight: "bold",
                  fontFamily: "Encode Sans Condensed",
                }}
              >
                nutriólogos
              </Typography>
              {' '}de tu campus opina...
          </Typography>
          {lifeTecComments.map((comment) => (
            <Card key={comment.id} mt={2} sx={{mb:2}}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    {/* Avatar */}
                    <Avatar src={comment.url} alt={comment.autor} />
                    <Typography sx={{fontWeight: "bold"}}>{comment.autor}</Typography>
                  </Grid>
                  <Grid item xs sx={{mb: -1}}>
                    {/* Chip for "partede" */}
    
                      <Chip label={comment.partede} sx={{ mb: 1, backgroundColor: '#8bc34a', color: 'white', fontWeight: 'bold' }} />

                    {/* Typography for "titulo", "precio", "fecha", and "comentario" */}
                    <Typography variant="body1" sx={{fontWeight: "bold"}}>{comment.titulo}</Typography>
                    <Typography variant="body1" sx={{fontSize: {xs: '0.8rem', md: '0.8rem'}}}>Fecha: {comment.fecha}</Typography>
                    <Typography variant="body1" sx={{textAlign: "justify", mt: '0.5rem'}}>{comment.comentario}</Typography>
                    {/* Rating */}
                    <Rating name="read-only" value={comment.rating} readOnly sx={{mt:1}} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </>
      )}

      {/* Divider between sections */}
      <Divider sx={{ my: 2 }} />

      {/* Comunidad Tec Comments Section */}
      {comunidadTecComments.length > 0 && (
        <>
          <Typography variant="h6" mb={1} sx={{ fontWeight: 'bold' }}>
            La comunidad {' '}
            <Typography
                component="span"
                variant='h6'
                sx={{
                  color: "#1e88e5",
                  fontWeight: "bold",
                  fontFamily: "Encode Sans Condensed",
                }}
              >
                TEC
              </Typography>{" "}
              de tu campus opina...
          </Typography>
          <Grid container spacing={2}>
            {comunidadTecComments.map((comment) => (
              <Grid item xs={12} md={6} key={comment.id}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item>
                        {/* Avatar */}
                        <Avatar src={comment.url} alt={comment.autor} />
                        <Typography sx={{fontWeight: "bold"}}>{comment.autor}</Typography>
                      </Grid>
                      <Grid item xs>
                        {/* Chip for "partede" */}

                          <Chip color="primary" label={comment.partede} sx={{ mb: 1, fontWeight: 'bold' }} />
                      
                        {/* Typography for "titulo", "precio", "fecha", and "comentario" */}
                        <Typography variant="body1" sx={{fontWeight: "bold"}}>{comment.titulo}</Typography>
                    <Typography variant="body1" sx={{fontSize: {xs: '0.8rem', md: '0.8rem'}}}>Fecha: {comment.fecha} </Typography>
                    <Typography variant="body1" sx={{fontSize: {xs: '0.8rem', md: '0.8rem'}}}>Gasté: ${comment.precio} pesos</Typography>
                    <Typography variant="body1" sx={{textAlign: "justify",  mt: '0.5rem'}}>{comment.comentario}</Typography>
                    {/* Rating */}
                    <Rating name="read-only" value={comment.rating} readOnly sx={{mt:1}} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
         
        </>
      )}
      </Container>
    <Footer/>
    </>
  );
};


export default RestaurantesDetail;
