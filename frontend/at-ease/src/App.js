
import { Grid, makeStyles } from '@material-ui/core';
import Feed from './components/Feed';
import LeftBar from './components/LeftBar';
import RightBar from './components/Drawer';
import Navbar from './components/NavBars';
import Add from './components/Add';
import Meditate from './components/Meditate';
import MotivationalQuotes from './components/MotivationalQuotes';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Food from './components/Food';
import BreathingExercise from './components/BreathingExcercise';
import Home from './components/Home'

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {display:"none",},
  },
}));

const App = () => {
  const classes = useStyles();
  return (
  
  <div>

    Hello World

    <Navbar/>
    
    <Grid container>
      
      <Grid item sm={2} xs={2}>
        <LeftBar /> 
      </Grid>

      <Grid item sm={3}xs={3}> 
  
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/food" component={Food}><Food /></Route>
            <Route exact path="/meditate" component={Meditate} />
            <Route exact path="/breathingexercise" component={BreathingExercise} />
            <Route exact path="/motivationalquotes" component={MotivationalQuotes} />
           
      </Grid>
      
      {/* <Grid item sm={3}className={classes.right}>
        <RightBar />
      </Grid> */}
     </Grid>
    
    <Add />  
  
  </div>
  
  );
};


export default App;
