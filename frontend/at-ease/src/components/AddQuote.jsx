import { TextField, Button, makeStyles, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UpdateQuote from "./temp/UpdateQuote";


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(3)
    },
    headline:{
        fontFamily: 'Josefin Sans',
        marginBottom: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(2)
    }
}));


const AddQuote = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    
    let history = useHistory();
    
    const AddNewQuote = async () => {
        let formField = new FormData()

        formField.append('quote',quote)
        formField.append('author',author)
        
        await axios({
            method: 'post',
            url: 'https://at-ease-backend.herokuapp.com/quote/',
            data: formField
        }).then((response)=> {
                console.log(response.data);
                history.push("/")        
        })    
    }   

return (

    <Container className={classes.container} >
        <Typography className={classes.headline}> Share your inspiration quote, 
        note for your future self and the community. </Typography>
        
        <div>
        <TextField
            id="outlined-multiline-flexible"
            label="Message"
            size="large"
            multiline
            maxRows={10}
            variant="outlined"
            value={quote}
            style={{ width:"100%" }}
            onChange={(e) => setQuote(e.target.value)} />
        </div>

        <div>
        <TextField
            id="outlined-basic"
            label="By"
            size="small"
            variant="outlined"
            value={author}
            style={{ marginTop: 18 }}
            onChange={(e) => setAuthor(e.target.value)} />
        </div>        
        

        <div className={classes.button}>

            <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
          
                  id="new-quote"
                >
                 DELETE
                </Button>
            

            <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpen(false)}
                >
                  CANCEL
                </Button>

            <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={UpdateQuote}
                  id="new-quote"
                >
                 EDIT
                </Button>

             <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={AddNewQuote}
                  id="new-quote"
                >
                 SUBMIT
                </Button> 


        </div>
    </Container>

);
}


export default AddQuote;
