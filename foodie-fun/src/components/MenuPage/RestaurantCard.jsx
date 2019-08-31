import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';


import RestaurantForm from './RestaurantForm.jsx' 
import RestaurantList from './RestaurantList.jsx'

const RestaurantCard = (props) => {
    console.log(props)
const [restaurants, setRestaurants] = useState([
    {restaurant_name: 'Pizza Place', restaurant_type: 'Italian', item_name: 'Pepperoni Pizza'}
])

// add resturant
const addRestaurant = restaurant => {
    setRestaurants([...restaurants, restaurant])
}    

    return (

        <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Restaurant</Link>
            <Route path="/add" render={props => <RestaurantForm {...props} submitRestaurant={addRestaurant} /> } />
    
        </div>
    )
}

export default RestaurantCard
