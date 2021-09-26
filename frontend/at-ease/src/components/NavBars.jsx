import { Avatar, Badge, InputBase , AppBar, makeStyles, Toolbar, Typography, alpha } from '@material-ui/core';
import { Cancel, Search , Mail, Notifications } from "@material-ui/icons";
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoLg:{
      display: "none",
      [theme.breakpoints.up("sm")]: {display: "block"},
    },
    logoSm:{
      display: "block",
      [theme.breakpoints.up("sm")]: {display: "none"},
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor : alpha(theme.palette.common.white, 0.15),
      '&:hover' : {
          backgroundColor : alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down("sm")]: {display: (props)=> props.open ? "flex" : "none", 
      width: "50%",},        
    },
    input: {
        color: "white",
        marginLeft:theme.spacing(1.5)
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {display: "none"},
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {display: "none"},
    },
    icons : {
        alignItems: "center",
        display: (props)=> props.open ? "none" : "flex",
    },
    badge: {
        marginRight: theme.spacing(2),
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  return ( 
    <AppBar position="static">
        <Toolbar className={ classes.toolbar }>
            <Typography variant="h4" className={classes.logoLg}>
            at-ease
            </Typography>
            <Typography variant="h5" className={classes.logoSm}>
            at-ease
            </Typography>
            
            <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search..." className={classes.input}/>
            <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
            </div>
            
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                <Badge badgeContent={0} color="secondary" className={classes.badge}>
                    <Mail />
                </Badge> 
                <Badge badgeContent={0} color="secondary"className={classes.badge}>
                    <Notifications />
                </Badge> 
                <Avatar alt="Welcome Smile" src="https://m.media-amazon.com/images/I/41CyuoxrPvL._AC_.jpg">
                </Avatar>
            </div>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;
