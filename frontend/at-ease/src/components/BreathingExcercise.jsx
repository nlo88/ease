import { Container, makeStyles } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
    },
}));


function Breathe () {

    const classes = useStyles();
    
        return (
        <Container className={classes.container}>
        <h1> Inhale Exhale </h1>
        </Container>
        )      
    
};


export default Breathe;