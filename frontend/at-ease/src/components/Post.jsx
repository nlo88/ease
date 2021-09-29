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
import Add from "./Add";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
  card: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = ({ img, title }) => {
  const classes = useStyles();
  return (
    
    <container className={classes.container}>
      <Typography variant="h5">Share your inspiring story, wisdom, emotion and love notes to your future self.</Typography>
      <Typography variant="h7" >You're here now. You took a step towards healing yourself. 
        I'm proud of you. I promise you, that you are a beautiful soul. 
        You deserve peace. You deserve happiness. 
        You deserve a fulfilling life, and what's best? 
        All these are coming to you. Don't quit. 
        Keep working on yourself, because whatever it is that you're fighting now, it will be over, and you will come out stronger than you ever thought you were. 
       </Typography>

      
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>

    <Add />
    </container>
  );
};

export default Post;