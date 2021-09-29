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
        <Typography variant="h6"> </Typography>

        <CardActionArea>
            <CardMedia className={classes.media}
            image={"http://www.styleofthecitymag.co.uk/wp-content/uploads/2020/03/wellness-800x600.jpg"}
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