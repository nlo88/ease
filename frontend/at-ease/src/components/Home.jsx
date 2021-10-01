import React from 'react';
import {
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
    Container,
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    container: {  
        marginTop: theme.spacing(3)
    },
    welcomefont: {
        fontSize: 50,
        color:"purple",
    },
    card: {
        height: 380,
        width: 250,
        marginTop: theme.spacing(5),
    },
    media: {
      height: 380,
      [theme.breakpoints.down("sm")]: {
        height: 360,
      },
    },
  }));

function Home(props) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
        {/* <Typography className={classes.welcomefont} variant="h6"> breathe. </Typography> */}
        
        <CardActionArea>
            <CardMedia className={classes.media}
            image={"https://i.pinimg.com/564x/aa/3d/55/aa3d55721a08d51cfb9708c79eedecce.jpg"}
            // http://www.styleofthecitymag.co.uk/wp-content/uploads/2020/03/wellness-800x600.jpg"
            title ="My Post"/>
            <CardContent>
            <Typography variant="body"> 
            </Typography>
            </CardContent>
        </CardActionArea> 
        </Container>
    );
}

export default Home;