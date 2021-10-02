import { Container, makeStyles, Typography, CardMedia, Card} from "@material-ui/core";
import { useEffect , useState } from "react";
import ReactPlayer from "react-player";

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
        margin: "auto",
        
      },
    videocard: {
        margin: "auto" ,
        backgroundColor: "lightblue",
        font: "white",
        fontWeight: "Bold",
        
    }
}));

function Meditate () {

    const classes = useStyles();
    const meditateURL = "https://at-ease-backend.herokuapp.com/meditate/";
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
        <Card elevation={3}  className={classes.videocard}>
        {
        meditate.map((data) => ( 
        <div className={classes.meditate}>
        <Typography className={classes.title}>{data.title}</Typography>
        <CardMedia>
        <ReactPlayer className={classes.media} 
            frameborder="0" allow='autoplay; encripted-media' 
            allowfullscreen 
            title='video'
            width="auto"
            url={data.preview_url} 
            ></ReactPlayer>
        
        <Typography className={classes.moderator} src={data.moderator} alt="">By {data.moderator}.</Typography>
        </CardMedia>
        </div>
        ))
        }

    </Card>   
    </Container>
    );
};


export default Meditate;