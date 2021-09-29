import { Container, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect , useState } from "react";
import AddFood from "./AddFood";

const useStyles = makeStyles((theme) => ({
    heading: {
        color: "green",
        marginBottom: theme.spacing(2),

    },
    container: {
        paddingTop: theme.spacing(3),
       
    },
    image: {
        height: 350,
        width: 450,    
    },
    post: {
        marginBottom: theme.spacing(5),
    }
}));


function Food () {

    const classes = useStyles();
    // const foodURL = "http://localhost:8000/food/";
    const [food, setFeed] = useState([]);

    const fetchFood = async () => {
        const result = await axios.get('http://localhost:8000/food/')
        
        console.log(result.data)
        setFeed(result.data)
        
        // const res = await fetch(foodURL);
        // const json = await res.json();
            // setFeed(json)
            // console.log(res)
        }   
        
        useEffect(() => {
            fetchFood();
        }, []);

        

        console.log(food)
    
        return (
        <Container className={classes.container}>
        
        <div className={classes.heading}>
        <Typography variant="h5"> Eat your food as medicine, not medicine as your food. </Typography>
        </div>
        {
        food.map((data , ) => (
        <div className={classes.post}>
        <Typography className={classes.title}>{data.title}</Typography>
        {/* <img className={classes.image} src={data.photo_url} alt=""/> */}
        <Typography gutterBottom variant="h9" className={classes.text}>{data.benefits}</Typography>
        </div>     

        ))
        }

        </Container>
    );
};



export default Food;