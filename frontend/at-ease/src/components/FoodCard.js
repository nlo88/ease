
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton , Typography, CardMedia, Link } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import { useHistory } from 'react-router';

const FoodCard = ({ note, handleDelete,  AddFood }) => {
    const history = useHistory();
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
        
            <Typography variant="body2" color="TextSecondary">{note.benefits}</Typography>
            </CardContent>
            <CardActions disableSpacin>
                <IconButton 
                    onClick={() => handleDelete(note.id)}>
                    <DeleteOutlined />
                </IconButton>

                <IconButton 
                    aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>

                
                <IconButton 
                    component={Link} 
                    to="/addfood" 
                    onClick={() => history.push("/addfood")} > 
                    <CreateIcon /> 
                </IconButton>
                
                
            </CardActions>
            </Card> 
        </div>
    );
};

export default FoodCard;