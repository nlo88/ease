import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    card: {
        height: 500,
        width: 550,
        marginBottom: theme.spacing(5),
    },
    media: {
      height: 380,
      [theme.breakpoints.down("sm")]: {
        height: 360,
      },
    },
  }));

const Post = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        
        <CardActionArea>
            <CardMedia className={classes.media}
            image={"http://www.styleofthecitymag.co.uk/wp-content/uploads/2020/03/wellness-800x600.jpg"}
            title ="My Post"/>
            <CardContent>
            <Typography gutterBottom variant="h5">{props.title}</Typography>
            <Typography variant="body">
            </Typography>
            </CardContent>
        </CardActionArea>
        
        <CardActions>
            {/* <Button size="small" color="primary">Share</Button> */}
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
        
        </Card>
    ); 
};



export default Post;