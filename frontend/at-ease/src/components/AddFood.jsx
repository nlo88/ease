import { TextField, Button, makeStyles, Container, Typography, Card, CardContent } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";




const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(3)
    },
    headline:{
        marginBottom: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(2)
    }
}));

const AddFood = (addFood) => {

    const classes = useStyles();
    const [title, setTitle] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [benefit, setBenefit] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);
  
    let history = useHistory();
    
    const AddNewFood = async () => {
        let formField = new FormData()

        formField.append('title',title)
        formField.append('photo_url',photo)
        formField.append('benefits',benefit)

        if (photo!== null){
        formField.append('image', photo)
        }
        
        await axios({
            method: 'post',
            url: 'https://at-ease-backend.herokuapp.com/food/',
            data: formField
        }).then((response)=> {
                console.log(response.data);
                history.push("/")
        })      
        
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpenAlert(false);
    }
    
return (

    <Container className={classes.container} >
        <Card>
        <CardContent>
        <Typography className={classes.headline}> Enter article, food related to health with great benefits: </Typography>
        
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
                  
                  id="new-food"
                >
                DELETE
                </Button> 

            <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={AddNewFood}
                  id="new-food"
                >
                EDIT
                </Button>

             <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={AddNewFood}
                  id="new-food"
                >
                SUBMIT
                </Button> 
        </div>
        </CardContent>
        </Card>

        <Alert onClose={handleClose} severity="success">
            This is a success message!
        </Alert>

    </Container>

    

);
}

export default AddFood;
