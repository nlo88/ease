import { Grid, makeStyles } from '@material-ui/core';

import LeftBar from './components/LeftBar';
import Navbar from './components/NavBars';
import Meditate from './components/Meditate';
import MotivationalQuotes from './components/MotivationalQuotes';
import Food from './components/Food';
import BreathingExercise from './components/BreathingExcercise';
import Home from './components/Home'
import AddQuote from './components/AddQuote'
// import UpdateQuote from './components/UpdateQuote';
import AddFood from './components/AddFood';
import { Route } from 'react-router-dom';
import UpdateFood from './components/UpdateFood';
import FoodDetail from './components/FoodDetail';


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
     
      <Grid item sm={2} xs={2}>
      <LeftBar /> 
      </Grid>

      <Grid item s={4} xs={9}> 
  
        <Route exact path="/" component={Home} />
        
        <Route exact path="/food" component={Food}><Food /></Route>
        <Route exact path="/addfood" component={AddFood} />
        <Route exact path="/food/:id/update" component={UpdateFood}></Route>
        <Route exact path="/food/:id/" component={FoodDetail}></Route>
        
        <Route exact path="/meditate" component={Meditate} />
        <Route exact path="/breathingexercise" component={BreathingExercise} />
        <Route exact path="/motivationalquotes" component={MotivationalQuotes} />
        
        <Route exact path="/addQuote" component={AddQuote} />
        {/* <Route exact path="/:id/update" component={UpdateQuote} /> */}

      </Grid>
    </Grid>
    
    </div>
  
  );
};

export default App;
