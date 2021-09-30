import { Grid, makeStyles } from '@material-ui/core';
import LeftBar from './components/LeftBar';
import Navbar from './components/NavBars';
import Meditate from './components/Meditate';
import MotivationalQuotes from './components/MotivationalQuotes';
import { Route } from 'react-router-dom';
import Food from './components/Food';
import BreathingExercise from './components/BreathingExcercise';
import Home from './components/Home'
import Post from './components/Post'
import AddQuote from './components/AddQuote'
import UpdateQuote from './components/UpdateQuote';

const useStyles = makeStyles((theme) => ({
  mainpage:{
    backgroundColor: "#ffe45e",
  },
  right: {
    [theme.breakpoints.down("sm")]: {display:"none",},
  },
}));

const App = () => {
  const classes = useStyles();
  return (
  
  <div className={classes.mainpage}>
    <Navbar/>
   
    <Grid container className={classes.container}>
     
      <Grid item sm={2} xs={5}>
            <LeftBar /> 
      </Grid>

      <Grid item xs={4} xs={8}> 
  
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route exact path="/food" component={Food}><Food /></Route>
            
           
            <Route exact path="/meditate" component={Meditate} />
            <Route exact path="/breathingexercise" component={BreathingExercise} />
            <Route exact path="/motivationalquotes" component={MotivationalQuotes} />
            <Route exact path="/addQuote" component={AddQuote} /> 
            <Route exact path="/:id/update" component={UpdateQuote} />
           
      </Grid>
      
      {/* <Grid item sm={3}className={classes.right}>
        <RightBar />
      </Grid> */}
     </Grid>
    
    </div>
  
  );
};


export default App;
