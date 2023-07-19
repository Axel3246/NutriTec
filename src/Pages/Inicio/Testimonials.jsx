import React from 'react';
import { Grid, Container, Typography, Card, CardContent, Avatar } from '@mui/material';

import testimonial1 from '../../assets/Testimonials/testimonial1.jpeg';
import testimonial2 from '../../assets/Testimonials/testimonial2.jpg';
import testimonial3 from '../../assets/Testimonials/testimonial3.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Soy foráneo y gracias a la comunidad de NutriTec puedo comprar en restaurantes que apoyan mi salud.",
      author: 'Axel Hernández ~ A00829837',
      avatar: testimonial1,
    },
    {
      id: 2,
      text: '¡Me encanta que los nutriólogos de mi campus forman parte de esta iniciativa!',
      author: 'Karyme Elizabeth ~ A00123456',
      avatar: testimonial2,
    },
    {
      id: 3,
      text: 'He notado un cambio positivo en mi peso y en mis hábitos alimenticios. ¡Gracias, Borregos 🐑!',
      author: 'Brandon Hernández ~ A00828282',
      avatar: testimonial3,
    },
  ];

  return (
        <>
        
        <Grid container justifyContent="flex-start" spacing={2} sx={{mb: 2}}>
            <Grid item xs={11} md={8}>
            <Card sx={{ display: 'flex' }}>
            <Avatar src={testimonials[0].avatar} alt={testimonials[0].author} sx={{ml: 2, mt: 3}} />
                <CardContent sx={{ flex: '1 1 auto' }}>
                  <Typography variant="body1" gutterBottom sx={{fontSize: {xs: '1rem', md: '1.1rem'}}}>
                    "{testimonials[0].text}"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: {xs: '1rem', md: '1.1rem'} }}>
                    - {testimonials[0].author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>

        <Grid container sx={{justifyContent: 'flex-end', mb: 2}} spacing={2}>
            <Grid item xs={11} md={7}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: '1 1 auto' }}>
                  <Typography variant="body1" gutterBottom sx={{textAlign: 'right', fontSize: {xs: '1rem', md: '1.1rem'}}}>
                    "{testimonials[1].text}"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'right', fontSize: '1rem' }}>
                    - {testimonials[1].author}
                  </Typography>
                </CardContent>
                <Avatar src={testimonials[1].avatar} alt={testimonials[0].author} sx={{mr: 2, mt: 3}} />
              </Card>
            </Grid>
        </Grid>

        <Grid container justifyContent="flex-start" spacing={2} sx={{mb: 2}}>
            <Grid item xs={11} md={8}>
            <Card sx={{ display: 'flex' }}>
            <Avatar src={testimonials[2].avatar} alt={testimonials[0].author} sx={{ml: 2, mt: 3}} />
                <CardContent sx={{ flex: '1 1 auto' }}>
                <Typography variant="body1" gutterBottom sx={{fontSize: {xs: '1rem', md: '1.1rem'}}}>
                    "{testimonials[2].text}"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                    - {testimonials[2].author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
        </>
  );
};

export default Testimonials;
