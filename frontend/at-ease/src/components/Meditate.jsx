import { Container, makeStyles, Typography, CardMedia, } from "@material-ui/core";
import { useEffect , useState } from "react";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(3),
    },
    image: {
        height: 350,
        width: 850,    
    },
    media: {
        width: "80%",
        margin: "auto"
      },
}));

function Meditate () {

    const classes = useStyles();
    const meditateURL = "http://localhost:8000/meditate/";
    const [meditate, setMeditate] = useState([]);
    
    
    const getProductionData = async () => {
        
        const res = await fetch(meditateURL);
        const json = await res.json();
            
            setMeditate(json)
            console.log(res)
        }   
        
        useEffect (() => {
            getProductionData();
        }, []);

        console.log(meditate)
    
        return (
        <Container className={classes.container}>
        <Typography> Welcome to our Meditation Center </Typography>
        {
        meditate.map((data) => (
        <div className={classes.meditate}>
        <Typography className={classes.title}>{data.title}</Typography>
        <CardMedia>
        <iframe className={classes.media} frameborder="0" allow='autoplay; encripted-media' allowfullscreen title='video' src={data.preview_url} ></iframe>
        </CardMedia>
        <Typography className={classes.moderator} src={data.moderator} alt=""/>
       
        </div>
        ))
        }
        
    </Container>
    );
};


export default Meditate;