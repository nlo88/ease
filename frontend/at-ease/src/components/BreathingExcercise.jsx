import { Container, makeStyles, Typography, Card, CardContent } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
    },
    img:{
        position: "center",
    }
}));


function Breathe () {

    const classes = useStyles();
    
        return (
        <Container className={classes.container}>
        
        <Card elevation={3}>
        <CardContent>
        <img className={classes.img} height="200" src="https://static01.nyt.com/images/2017/10/18/watching/mindfulness-kid-pinwhell/mindfulness-kid-pinwhell-jumbo-v3.gif" alt="You'll be OK."/>
        
        <Typography variant="body2" color="TextSecondary"> The key components for mindful living are:
        Pay attention to breathing, especially when you feel intense emotions.
        Notice how you feel at the moment, visually, sounds, smells, things that usually get out of your consciousness.
        Recognize that thoughts and emotions are fleeting and do not define you.
        Calibrate with the physical sensations of your body: how the water feels on the skin, how the body feels. </Typography>
        </CardContent>
        
        </Card>
        
        </Container>
        )      
    
};


export default Breathe;