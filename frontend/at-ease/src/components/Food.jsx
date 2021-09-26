import { Container, makeStyles } from "@material-ui/core";
import { useEffect , useState } from "react";



const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(3),
    },
    image: {
        height: 350,
        width: 450,    
    }
}));


function Food () {

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
        <div className={classes.post}>
        <h3 className={classes.title}>{data.title}</h3>
        <img className={classes.image} src={data.photo_url} alt=""/>
        <h4 className={classes.text}>{data.benefits}</h4>
        </div>
        ))
        }
        
    </Container>
    );
};


export default Food;