import { Container, makeStyles } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    },
}));


function MotivationalQuotes () {

    const classes = useStyles();
    
        return (
        <Container className={classes.container}>
        <h1> “He is free from self- display, and therefore he shines;”― Lao Tzu, Tao Te Ching </h1>
        </Container>
        )
        
        
        
    
};


export default MotivationalQuotes;