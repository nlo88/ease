import { Button, Container, makeStyles, Typography, Card, CardContent} from "@material-ui/core";
import { useEffect , useState } from "react";
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    },
    content: {
      marginTop: theme.spacing(2)
    },

    quotes: {
      textAlign: "center",
      marginTop: theme.spacing(2),
    },

    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3)
    },
    
    img: {
      height: 380,
      bottomMargin: theme.spacing(6),
    }

    
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
        <Card xs={{ maxWidth: 500 }} square elevation="3" className={classes.paper}> 
          <CardContent className={classes.content}>
          <img className={classes.img} src="https://i.pinimg.com/564x/18/99/2a/18992a1198248404595dce2207c1c4d0.jpg" alt=""/>
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
              
        </CardContent>
        </Card>
        </Container> 
        
        );
};

export default MotivationalQuotes;