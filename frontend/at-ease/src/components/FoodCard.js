import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton , Typography, CardMedia, Link, Button } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useHistory } from 'react-router';
import { ClassNames } from '@emotion/react';


const FoodCard = ({ note, handleDelete , match }) => {
    const history = useHistory();
    const id  = note.id

    return (
        <div>
            <Card elevation={3}>
            <CardHeader
                title={note.title} handleDelete={handleDelete}
                />
            <CardContent>
            <CardMedia
                component="img"
                height= "195"
                image={note.photo_url}
                alt=""
                /> 
        
            <Typography variant="body2" color="TextSecondary">{note.benefits} </Typography>
            </CardContent>
            
            <CardActions disableSpacing>
                <IconButton className={ClassNames.deleteicon}
                    title="ARE YOU SURE YOU WANT TO DELETE THIS?"
                    onClick={() => handleDelete(note.id)}>
                    <DeleteOutlined />
                </IconButton>

                <IconButton
                    title="SHOW SOME LOVE"
                    aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>
 
                <IconButton 
                    component={Link} 
                    to="/addfood"
                    title="CREATE NEW"
                    onClick={() => history.push("/addfood")} > 
                    <ControlPointIcon />
                </IconButton>
                
                <IconButton 
                    component={Link} 
                    to={`food/${id}/`}
                    title="EDIT"
                    onClick={() => history.push(`food/${id}/update`)} > 
                    <CreateIcon /> 
                </IconButton>
                
            </CardActions>
            </Card> 
        </div>
    );
};

export default FoodCard;