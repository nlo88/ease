import { Container, makeStyles, MenuList, MenuItem } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import GrassIcon from '@mui/icons-material/Grass';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
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
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {marginBottom: theme.spacing(3),
        cursor: "Pointer",
    },
},
icon: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
link: {
    display: "flex",
    alignItems: "Center",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {marginBottom: theme.spacing(3),
        cursor: "Pointer", 
    },
},


}));

const LeftBar = ( links ) => {
    const classes = useStyles();
    
    return <Container className={classes.container}>
    
    <MenuList className={classes.menulist}>
        <MenuItem component={Link} to="/"> <HomeIcon/> </MenuItem>
        <MenuItem component={Link} to="/food"> <LocalPharmacyIcon /></MenuItem>
        <MenuItem component={Link} to="/meditate"> <SelfImprovementIcon  /></MenuItem>
        <MenuItem component={Link} to="/breathingexercise"> <GrassIcon /></MenuItem>
        <MenuItem component={Link} to="/motivationalquotes"> <LocalFloristIcon /></MenuItem>
        <MenuItem component={Link} to="/addquote"> <VolunteerActivismIcon /> </MenuItem>
        
       
  
    </MenuList>   
            
    </Container>;

    };


export default LeftBar;
