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

  import t1 from "../../assets/Landing/Avatars/teus1.png";
  import t2 from "../../assets/Landing/Avatars/teus2.png";
  import t3 from "../../assets/Landing/Avatars/teus3.png";  

const Grupos = () => {
  return (
    <>
         {/*--------------Comunidad-------------*/}
         <Grid container spacing={2}>
          {/* Two Cards */}
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: "10px" }}>
              <CardHeader
                avatar={<Avatar src={t1} />} // Replace 'avatarURL1' with the actual URL of the first avatar image
                title={<Typography sx={{fontWeight: "bold", fontSize: '1.2rem'}}>De Tí 🫵</Typography>}
       
              ></CardHeader>
              <CardContent>
                <Typography variant="body2" sx={{mt: -1, fontSize: '1rem'}}>
                  Forma parte de esta iniciativa al dejar tu opinión en los restaurantes
                  que has visitado y probado. Recuerda, ¡todos somos comunidad TEC!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/*--------------Nutriología-------------*/}

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: "10px" }}>
              <CardHeader
                avatar={<Avatar src={t2} />} // Replace 'avatarURL2' with the actual URL of the second avatar image
                title={<Typography sx={{fontWeight: "bold", fontSize: '1.2rem'}}>De la Comunidad TEC 🐑</Typography>}
              />
              <CardContent>
              <Typography variant="body2" sx={{mt: -1, fontSize: '1rem'}}>
                  Encuentra y visualiza las opiniones de la comunidad TEC de tu campus y decide con anticipación
                  si la comida de un restaruante encaja con tu dieta.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/*--------------Tú-------------*/}

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: "10px" }}>
              <CardHeader
                avatar={<Avatar src={t3} />} // Replace 'avatarURL1' with the actual URL of the first avatar image
                title={<Typography sx={{fontWeight: "bold", fontSize: '1.2rem'}}>De LiFe - Nutrición 🌱</Typography>}
              />
              <CardContent>
              <Typography variant="body2" sx={{mt: -1, fontSize: '1rem'}}>
                  ¿Indecis@? ¡No te preocupes! También podrás observar las opiniones de los
                  nutriólogos expertos de tu campus. ¡TQueremos!
                  
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </>
  )
}

export default Grupos