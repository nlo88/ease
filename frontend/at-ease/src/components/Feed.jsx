import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
import { useEffect , useState } from "react";



const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    },
}));


function Feed () {

    const classes = useStyles();
    const foodURL = "http://localhost:8000/food/";
    const [food, setFeed] = useState([]);

    const getProductionData = async () => {
        
        const res = await fetch(foodURL);
        const json = await res.json();
            
            setFeed(json)
            console.log(res)
        }   
        
        useEffect (() => {
            getProductionData();
        }, []);

        console.log(food)
    
        return (
        <Container className={classes.container}>
        <h1> Food benefits </h1>
        {
        food.map((data) => (
        <Post className={classes.post}>
        <h3>title</h3>
        <h3>{data.title}</h3>
        <h3>{data.photo_url}</h3>
        <h4>{data.benefits}</h4>
        </Post>
        ))
        }
        
    </Container>
    );
};


export default Feed;