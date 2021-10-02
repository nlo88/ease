import { Container, makeStyles } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import FoodCard from './FoodCard';
import React, { useEffect , useState } from "react";
import axios from "axios";


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
    const [food, setFood] = useState([]);
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch(`https://at-ease-backend.herokuapp.com/food/`)
        .then(res => res.json())
        .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch(`https://at-ease-backend.herokuapp.com/food/${id}`, {
            method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes);
    }
    
    const fetchFood = async () => {
        const result = await axios.get('https://at-ease-backend.herokuapp.com/food/')
        console.log(result.data)
        setFood(result.data)
        }   
        
        useEffect(() => {
            fetchFood();
        }, []);
    
           
        return (
            <Container className={classes.container}>
                <Grid container spacing={3}>
       
        {food.map((data) => (
            
            <Grid item key={data.id} xs={12} md={6} lg={4}>
                        <FoodCard note={data} handleDelete={handleDelete} />
                    </Grid>  
        ))}        
                </Grid> 
                </Container>
        
        );
                    
    
        
    }

export default Food;




        