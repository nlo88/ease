import { TextField , Typography, Box, makeStyles, Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useEffect , useState} from 'react';

const useStyles = makeStyles((theme) => ({
    box: {
        alignItems: "center",
        marginLeft: theme.spacing(5),
    },
    TextField: {
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    button: {
        display: "flex",
        marginTop: theme.spacing(5),
    }
}));


function AddQuotes () {
    
    const url  = 'http://localhost:8000/quote/';

    
    const classes = useStyles();
    const [newQuote, setNewQuote] = useState(null);
    // const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setNewQuote(res.data);
        });
    },[]);

    // useEffect(() => {
    //     axios.get(`${url}/asdf`)
    //     .then((res) => {
    //         setNewQuote(res.data);
    //     }) 
    //     .catch(err => {
    //         setError(error);
    //     })
    // },[]);

    // if (error) return `Error: ${error.message}`

    function createQuote() {
        axios.post(url, {
            title: 'Hello',
            author: 'Test'
        })
        .then((res)=>{
            setNewQuote(res.data);
        });
    }

    // if(!newQuote) return null;

    // function deleteQuote() {
    //     axios.delete(`${url}/1`)
    //     .then(()=> {
    //         alert("Quote deleted!")
    //         setNewQuote(null)
    //     });
    // }

    if(!newQuote) return "No post!"
    
    return (
        <Box className={classes.box}>
        <div className={classes.TextField}>
        <TextField
            id="outlined-multiline-flexible"
            label="Quote"
            size="small"
            multiline
            maxRows={4}
            variant="outlined"
            value={newQuote.quote}
            style={{ width: "100%" }}>
               
            </TextField>

            <TextField
            id="outlined-basic"
            label="Author"
            size="small"
            variant="outlined"
            value={newQuote.author}
            style={{ marginTop: 11 }} >
                
            </TextField>
        

            <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={createQuote}
                  id="new-quote"
                >
                 Submit Quotes
                </Button>
        
        <Typography>{newQuote.quote}</Typography>
        <Typography>{newQuote.author}</Typography>
        </div>
        </Box>
    )

}

export default AddQuotes;