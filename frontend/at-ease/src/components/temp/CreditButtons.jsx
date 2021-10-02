import {
    Button,
    Container,
    Fab,
    makeStyles,
    Modal,
    Snackbar,
    TextField,
    Tooltip,
  } from "@material-ui/core";
  import { Add as AddIcon } from "@material-ui/icons";
  import { useState } from "react";
  import MuiAlert from "@material-ui/lab/Alert";
  
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: "fixed",
      bottom: 20,
      right: 20,
    },
    container: {
      width: 600,
      height: 550,
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh",
      },
    },
    form: {
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(3),
    },
  }));
  
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpenAlert(false);
    };
    return (
      <>
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
          
        
      </>
    );
  };
  
  export default Add;