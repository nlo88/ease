import { Container, makeStyles, Typography,  
    MenuList, MenuItem } from '@material-ui/core';
    import { BrowserRouter as Router , Route, Switch , Link, withRouter } from 'react-router-dom';

    // import { Home , List, PlayCircleOutline, Bookmark } from '@material-ui/icons';
import Meditate from './Meditate';
import MotivationalQuotes from './MotivationalQuotes';
import Food from './Food';


const useStyles = makeStyles((theme) => ({
container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(3),
    backgroundColor: "hotpink",
    position: "Sticky",
    top:0,
    [theme.breakpoints.up("sm")]: {
        backgroundColor: "hotpink",
        color: "white",
        },   
},
item: {
    display: "flex",
    alignItems: "Center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {marginBottom: theme.spacing(3),
        cursor: "Pointer",
    },
},
icons: {
    marginLeft: theme.spacing(0.5),
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("sm")]: {fontSize: "20px",}
},
link: {
    display: "flex",
    alignItems: "Center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {marginBottom: theme.spacing(3),
        cursor: "Pointer", 
    },
},
text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {display:"none",},
}

}));

const LeftBar = ( links ) => {
    const classes = useStyles();
    
    return <Container className={classes.container}>
    <MenuList>
        <MenuItem component={Link} to="/">Home</MenuItem>
        <MenuItem component={Link} to="/food">Food</MenuItem>
        <MenuItem component={Link} to="/meditate">Meditate</MenuItem>
        <MenuItem component={Link} to="/breathe">Breathing Exercise</MenuItem>
        <MenuItem component={Link} to="/motivationalquotes">Motivational Quotes</MenuItem>
    </MenuList>   
        </Container>;
    };


export default LeftBar;


// Option 1
        //  <div>
        //     <div className={classes.item}>
        //         </div><Link to="/" onClick={()=> setOpen(true)}>
        //         <Home className={classes.icons}/>
        //         <Typography className={classes.text}>HOME</Typography>
        //         </Link> 
        //     </div>
        
            
        //     <div className={classes.item}>
        //         <Link to="/food">
        //         <List className={classes.icons}/>
        //         <Typography className={classes.text}>FOOD</Typography>
        //         </Link> 
        //     </div>
            
            
        //     <div className={classes.item}>
        //         <Link to="/breathingexercise">
        //         <List className={classes.icons}/>
        //         <Typography className={classes.text}>BREATHING EXERCISE</Typography>
        //         </Link>
        //     </div>

           
        //     <div className={classes.item}> 
        //         <Link to="/meditate"> 
        //         <PlayCircleOutline className={classes.icons}/>
        //         <Typography className={classes.text}>MEDITATE</Typography>
        //         </Link>
        //     </div>

            
        //     <div className={classes.link}>
        //         <Link to="/motivationalquotes"> 
        //         <Bookmark className={classes.icons}/>
        //         <Typography className={classes.text}>MOTIVATIONAL QUOTES</Typography>
        //         </Link>
        //     </div> 



// Option II
// <Router> 
//        <MenuItem onClick ={closeMenu}><Link to="/food">Food</Link></MenuItem>
//        <MenuItem onClick ={closeMenu}><Link to="/meditate">Meditate</Link></MenuItem>
//        <MenuItem onClick ={closeMenu}><Link to="/motivationalquotes">Motivational Quotes</Link></MenuItem>
        
//         <Route exact path="/food"> <Food /> </Route>
//         <Route exact path="/meditate"> <Meditate /> </Route>
//         <Route exact path="/motivationalquotes" > <MotivationalQuotes/> </Route>
    
//     </Router>