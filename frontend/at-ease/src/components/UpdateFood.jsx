import { makeStyles, Container, Button, Card, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useParams , useHistory } from 'react-router';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
    },
  }));

const UpdateFood = () => {
    
    const classes = useStyles();
    const [title, setTitle] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [benefits, setBenefits] = useState(null);
    
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        fetchFoods();
    }, [])

    let fetchFoods = async () => {
        const result = await axios.get(`https://at-ease-backend.herokuapp.com/food/${id}`);
        console.log(result.data.title);

        setTitle(result.data.title);
        setPhoto(result.data.photo_url);
        setBenefits(result.data.benefits);
    }
    
    const updateNewFood = async () => {
        let formField = new FormData()

        formField.append('title', title)
        formField.append('photo_url', photo)
        formField.append('benefits', benefits)

        if(photo !== null) {
            formField.append('photo', photo)
        }
        await axios({
            method: 'PUT',
            url: `https://at-ease-backend.herokuapp.com/food/${id}/`,
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push("/");
        })     
    
    return (
        <Container className={classes.container}>
        <div>
        <Card> 
            <TextField 
                id="outlined-basic"
                label="Title"
                size="small"
                variant="outlined"
                value={data.title}
                style={{ marginTop: 18 }}
                onChange={(e) => setTitle(e.target.value)}
            />

            <TextField 
                id="outlined-basic"
                label="Photo URL"
                size="small"
                variant="outlined"
                value={data.photo_url}
                style={{ marginTop: 18 }}
                onChange={(e) => setPhoto(e.target.value)}
            />

            <TextField 
                id="outlined-multiline-flexible"
                label="Post description"
                size="large"
                multiline
                maxRows={10}
                variant="outlined"
                value={data.quote}
                style={{ width:"100%" }}
                onChange={(e) => setBenefits(e.target.value)}
            />

        <Button 
         className={classes.button}
         onClick={updateNewFood}> EDIT </Button>   
        </Card>
        </div>
        </Container>
    );
};
}

export default UpdateFood;