import Grid from '@mui/material/Grid';
import { Typography, Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect , useState } from "react";
import FoodCard from './FoodCard';

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
    const [food, setFeed] = useState([]);
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/food/`)
        .then(res => res.json())
        .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8000/food/${id}`, {
            method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes);
    }
    
    const fetchFood = async () => {
        const result = await axios.get('http://localhost:8000/food/')
        console.log(result.data)
        setFeed(result.data)
        }   
        
        useEffect(() => {
            fetchFood();
        }, []);
       
        return (
        
        <Container className={classes.container}>
        <Typography variant="h6">Support your Body.</Typography>
        {/* <Typography>“Let food be thy medicine, and let medicine be thy food”</Typography> */}
        <p>The healing power of nutrition is a combination of multiple supporting roles that 
            synergistically and unselfishly work together. 
            “Let food be thy medicine” has withstood the test of time because it reflects 
            the power of nutrition to heal as it supports our physical body in its literal structure, 
            function, and energy needs; our mind and its connection to our thoughts, 
            beliefs, values, and behaviors; our movement as it sustains daily living 
            on an external and internal level; and our relationships with both our own bodies, 
            our friends and family, and our broader community of support. </p>
        <Grid container spacing={3}>
        {food.map((data) => (
            <Grid item key={data.id} xs={12} md={6} lg={4}>
                <FoodCard note={data} handleDelete={handleDelete}/>
            </Grid>  
        ))}
        </Grid> 

        </Container>

       
    );
};



export default Food;