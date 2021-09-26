
import { Grid, makeStyles } from '@material-ui/core';
import Feed from './components/Feed';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Navbar from './components/NavBars';
import Add from './components/Add';
import Meditate from './components/Meditate';
import MotivationalQuotes from './components/MotivationalQuotes';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Food from './components/Food';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {display:"none",},
  },
}));

const App = () => {
  const classes = useStyles();
  return (
  
  <div>
    <Navbar/>
    
    <Grid container>
      <Grid item sm={2} xs={2}>
        <LeftBar /> 
      </Grid>

      <Grid item sm={3}xs={3}> 
  
      <Router>
            <Switch>
            <Route exact path="/food" component={Food}><Food /></Route>
            <Route exact path="/meditate" component={Meditate} />
            <Route exact path="/motivationalquotes" component={MotivationalQuotes} />
            </Switch>
          </Router>
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
