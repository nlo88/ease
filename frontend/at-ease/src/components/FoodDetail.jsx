import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { Button, Typography, Link, Container, Card } from '@material-ui/core';

const FoodDetail = (detail) => {

    const [item, setItem] = useState([])

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetchItems();;
    },[])

    const fetchItems = async () => {
        const result = await axios.get(`https://at-ease-backend.herokuapp.com/food/${id}`)
        console.log(result.data)
        setItem(result.data)
    }

    const deleteItem = async (id) => {
        await axios.delete(`https://at-ease-backend.herokuapp.com/food/${id}`)
        history.push("/")
    }

    return (
        <Container>
        <div>
            <Card>{item.title}</Card>
                <div>
                    <img src={item.photo_url} alt=""/>
                    <Typography> {item.benefits} </Typography>
                </div>
            
            <Button 
            component={Link} 
            to={`/${item.id}/update`}
            >UPDATE</Button>

            <Button 
            component={Link} 
            onClick={() => deleteItem(item.title)}
            >DELETE</Button>
        </div>
        </Container>
    );
};

export default FoodDetail;