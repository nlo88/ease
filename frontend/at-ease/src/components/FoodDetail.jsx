import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { Button, Typography, Link, Container, Card } from '@material-ui/core';

const FoodDetail = (detail) => {

    const [items, setItems] = useState([])

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetchSingleItems();;
    },[])

    const fetchSingleItems = async () => {
        const {result} = await axios.get(`https://at-ease-backend.herokuapp.com/food/${id}`)
        console.log(result.data)
        setItems(result.data)
    }

    const deleteItem = async (id) => {
        await axios.delete(`https://at-ease-backend.herokuapp.com/food/${id}`)
        history.push("/")
    }


    return (
        <Container>
            
            <Card>{items.title}
                <div>
                    <img src={items.photo_url} alt=""/>
                    <Typography> {items.benefits} </Typography>
                </div>
            
            <Button 
            component={Link} 
            to={`/${items.id}/update`}
            >
            UPDATE</Button>

            <Button 
            component={Link} 
            onClick={() => deleteItem(items.title)}
            >
            DELETE</Button>

            </Card>

        </Container>
    );
};

export default FoodDetail;