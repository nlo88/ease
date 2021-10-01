import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodDetail = () => {

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const result = await axios.get('https://at-ease-backend.herokuapp.com/food/')
        console.log(result.data)
        setItems(result.data)
    }

    useEffect(() => {
        fetchItems();;
    }, [])

    const eachItem = () => {
        alert("detail")
    }

    return (
        <div>
            
        </div>
    );
};

export default FoodDetail;