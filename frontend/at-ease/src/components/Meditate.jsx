import { Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    },
}));


function Meditate ( link ) {

    const classes = useStyles();
    
        return (
        <Container className={classes.container}>
        <h1> Ohmmmmmmmm </h1>
        </Container>
        )
        
        
        
    
};


export default Meditate;