import { Container, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
    },
}));


function Breathe () {

    const classes = useStyles();
    
        return (
        <Container className={classes.container}>
        <img height="300" src="https://i.pinimg.com/564x/9b/5e/72/9b5e722285c9c8b7f4a54fbc72255b71.jpg" alt=""/>
        
        
        <Typography> The key components for mindful living are:
        Pay attention to breathing, especially when you feel intense emotions.
        Notice how you feel at the moment, visually, sounds, smells, things that usually get out of your consciousness.
        Recognize that thoughts and emotions are fleeting and do not define you.
        Calibrate with the physical sensations of your body: how the water feels on the skin, how the body feels, etc. </Typography>
        </Container>

        
        )      
    
};


export default Breathe;