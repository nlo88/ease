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
    },[])

    let fetchFoods = async () => {
        const result = await axios.get(`https://at-ease-backend.herokuapp.com/food/${id}`);
        console.log(result.data.title);

        setTitle(result.data.title);
        setPhoto(result.data.photo_url);
        setBenefits(result.data.benefits);
    }
    
    const updateAFood = async () => {
        let formField = new FormData()

        formField.append('title', title)
        formField.append('photo_url', photo)
        formField.append('benefits', benefits)

        if(photo !== null) {
            formField.append('photo_url', photo)
        }
        await axios({
            method: 'PUT',
            url: `https://at-ease-backend.herokuapp.com/food/${id}`,
            data: formField
        }).then((response) => {
            console.log(response);
            history.push("/");
        })
    } 


    
    return (
        <Container className={classes.container}>
        <div>
        <Card> 
            <TextField 
                id="outlined-basic"
                label=""
                size="small"
                variant="outlined"
                value={title}
                style={{ marginTop: 18 }}
                onChange={(e) => setTitle(e.target.value)}
            />

            <TextField 
                id="outlined-basic"
                label=""
                size="small"
                variant="outlined"
                value={photo}
                style={{ marginTop: 18 }}
                onChange={(e) => setPhoto(e.target.value)}
            />

            <TextField 
                id="outlined-multiline-flexible"
                label=""
                size="large"
                multiline
                maxRows={10}
                variant="outlined"
                value={benefits}
                style={{ width:"100%" }}
                onChange={(e) => setBenefits(e.target.value)}
            />

        <Button 
         className={classes.button}
         onClick={updateAFood}> EDIT 
         </Button>   


        </Card>
        </div>
        </Container>
    );

}

export default UpdateFood;