import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton , Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FoodCard = ({ note, handleDelete }) => {

    return (
        <div>
            <Card elevation={3}>
            <CardHeader
                title={note.title} handleDelete={handleDelete}
                />
            <CardContent>
            <Typography variant="body2" color="TextSecondary">{note.benefits}</Typography>
            </CardContent>
            <CardActions disableSpacin>
                <IconButton aria-label="add to favorites" onClick={() => handleDelete(note.id)}>
                <DeleteOutlined />
                <FavoriteBorderIcon />
                </IconButton>
                
            </CardActions>
            </Card> 
        </div>
    );
};

export default FoodCard;