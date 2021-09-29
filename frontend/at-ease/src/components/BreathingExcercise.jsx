import { Container, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(5),
    },
}));


function Breathe () {

    const classes = useStyles();
    
        return (
        <Container className={classes.container}>
        <Typography variant="h5"> Be mindful. </Typography>
        
        <Typography>
        The key components for mindful living are:
        Pay attention to breathing, especially when you feel intense emotions.
        Notice how you feel at the moment, visually, sounds, smells, things that usually get out of your consciousness.
        Recognize that thoughts and emotions are fleeting and do not define you.
        Calibrate with the physical sensations of your body: how the water feels on the skin, how the body feels in the stool, etc. </Typography>
        </Container>

        
        )      
    
};


export default Breathe;