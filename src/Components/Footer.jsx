import { Grid, IconButton, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Grid
      container
      component="footer"
      sx={{
        background: '#F7F7F7',
        color: '#black',
        py: 3,
        textAlign: 'center',
        width: '100%',
        mt: 4,
        borderTop: { xs: '1.5px solid #ccc', md: '2px solid #ccc' },
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h6">¡Sígue a NutriTec en las Redes Sociales! 🐑</Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <IconButton
            color="inherit"
            component={Link}
            href="https://www.facebook.com/TecdeMonterrey/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="https://twitter.com/TecdeMonterrey?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="https://www.instagram.com/tecdemonterrey/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="https://github.com/Axel3246"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Equipo 5. Bases de la Salud.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
