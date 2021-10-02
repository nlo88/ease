import { makeStyles, Container, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams , useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
    },
  }));

const UpdateQuote = () => {
    
    const classes = useStyles();
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        getFoods();
    })

    let getFoods = async () => {
        const result = await axios.get(`https://at-ease-backend.herokuapp.com/quote/`)
        console.log(result.data.title)

        setQuote(result.data.title);
        setAuthor(result.data.photo_url);
        
    }
    
    const updateNewQuote = async () => {
        let formField = new FormData()

        formField.append('quote', quote)
        formField.append('author', author)
        

        if(quote !== null) {
            formField.append('quote', quote)
        }
        await axios({
            method: 'PUT',
            url: `https://at-ease-backend.herokuapp.com/quote/${id}/`,
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push("/");
        })    
    }

    return (
        <Container className={classes.container}>
        <Button 
         className={classes.button}
         onClick={updateNewQuote}> EDIT </Button>   
        </Container>
    );
};

export default UpdateQuote;