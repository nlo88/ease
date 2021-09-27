import { Container, List, makeStyles } from "@material-ui/core";
import React from 'react';
import { useState, useEffect } from "react";



const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    },
}));


function MotivationalQuotes () {

    const classes = useStyles();
    const [ quote, setQuote ] = useState("")
    const [ author, setAuthor ] = useState("")


    useEffect(() => {
        fetch("http://localhost:8000/admin/ease_app/quotes/")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    }, []);

    let fetchNewQuote = () => {
        fetch("http://localhost:8000/admin/ease_app/quotes/")
          .then(res => res.json())
          .then(
            (quote) => {
              setQuote(quote.content);  
              setAuthor(quote.author);
            }
          )
      }
    
        return (
        <Container className={classes.container}>
        <h1> “He is free from self- display, and therefore he shines;”― Lao Tzu, Tao Te Ching </h1>
       
        <div className="quote">
            <h2>{quote}</h2>
            <h6>-{author}-</h6>
        </div>

         <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
   
        </Container>
        
        )        
    
};


export default MotivationalQuotes;