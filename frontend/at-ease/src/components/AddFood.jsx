import { TextField, Button, makeStyles, Container, Typography  } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


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

const AddFood = () => {

    const classes = useStyles();
    const [title, setTitle] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [benefit, setBenefit] = useState(null);
    
    let history = useHistory();
    
    const AddNewFood = async () => {
        let formField = new FormData()

        formField.append('title',title)
        formField.append('photo_url',photo)
        formField.append('benefits',benefit)

        await axios({
            method: 'post',
            url: 'http://localhost:8000/food/',
            data: formField
        }).then((response)=> {
                console.log(response.data);
                history.push("/")
        })    
    }

return (

    <Container className={classes.container} >
        <Typography className={classes.headline}> Message Board </Typography>
        
        <div>
        <TextField
            id="outlined-basic"
            label="Title"
            size="small"
            variant="outlined"
            value={title}
            style={{ marginBottom: 18 }}
            onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
        <TextField
            id="outlined-basic"
            label="Image URL"
            size="small"
            variant="outlined"
            value={photo}
            style={{ marginBottom: 18 }}
            onChange={(e) => setPhoto(e.target.value)} />
        </div>        
           
        <div>
        <TextField
            id="outlined-multiline-flexible"
            label="Benefits"
            size="large"
            multiline
            maxRows={10}
            variant="outlined"
            value={benefit}
            style={{ width: "100%" }}
            onChange={(e) => setBenefit(e.target.value)} />
        </div>       

        <div className={classes.button}>

            <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={AddNewFood}
                  id="new-quote"
                >
                 DELETE
                </Button>
            
           

            <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={AddNewFood}
                  id="new-quote"
                >
                 EDIT
                </Button>

             <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={AddNewFood}
                  id="new-quote"
                >
                 Submit
                </Button> 
        </div>
    </Container>

);
}

export default AddFood;
