import { Container, makeStyles, MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
link: {
    display: "flex",
    alignItems: "Center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {marginBottom: theme.spacing(3),
        cursor: "Pointer", 
    },
},


}));

const LeftBar = ( links ) => {
    const classes = useStyles();
    
    return <Container className={classes.container}>
    
    <MenuList className={classes.menulist}>
        <MenuItem component={Link} to="/">Home</MenuItem>
        <MenuItem component={Link} to="/food">Food</MenuItem>
        <MenuItem component={Link} to="/meditate">Meditate</MenuItem>
        <MenuItem component={Link} to="/breathingexercise">Breathing Exercise</MenuItem>
        <MenuItem component={Link} to="/motivationalquotes">Motivational Quotes</MenuItem>
        <MenuItem component={Link} to="/addquote">Message</MenuItem>
    </MenuList>   
            
    </Container>;

    };


export default LeftBar;
