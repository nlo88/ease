import { Button, Container, makeStyles, Typography, } from "@material-ui/core";
import { useEffect , useState } from "react";
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(3),
    },

    quotes: {
      textAlign: "center",
      paddingTop: theme.spacing(8),
    },
    
    icons: {
      margin: theme.spacing(3)
    },
    editIcon:{
      alignItems: "center",
      marginRight: theme.spacing(2),
    },
    deleteIcon:{
      marginLeft: theme.spacing(2),
    },

    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3)
    },

    
}));

function MotivationalQuotes (data) {

    const classes = useStyles();
    const [quotes, setQuotes] = useState('');
    const [authors, setAuthors] = useState('');
    
    const getData = () => {
        
        const quoteURL = 'https://at-ease-backend.herokuapp.com/quote/' ;
          fetch(quoteURL)
          .then((res) => 
          res.json())
          .then((data) => {
        

          let randomNum = Math.floor(Math.random() * data.length);
          let randomQuote = data[randomNum].quote;
          let randomAuthor = data[randomNum].author;

          setQuotes(randomQuote);
          setAuthors(randomAuthor);

          console.log(randomAuthor)
          console.log(randomQuote)

        })
        }

        useEffect (() => {
          getData();
      }, []);
      
        const handleClick =() => {
          getData();
        };
    
        return (
          
        <Container className={classes.quotes}>
           
        
           <Typography variant="h6"> {quotes} </Typography>
           <Typography> By {authors} </Typography>
           
          <div className={classes.icons}>
          {/* <BorderColorOutlinedIcon className={classes.editIcon}/>
          <DeleteOutlineIcon className={classes.deleteIcon} /> */}
          </div>

                <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={handleClick}
                  id="new-quote"
                >
                 New Quotes
                </Button>
              
   
        </Container> 
        
        );
};

export default MotivationalQuotes;