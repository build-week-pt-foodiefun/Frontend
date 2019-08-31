import React, { useState } from 'react';
import axios from 'axios'


const RestaurantForm = (props) => {
    // add restaurtnats
    const { submitRestaurant } = props;
  const [restaurant, setRestaurant] = useState({
    restaurant_name: '',
    restaurant_type: '',
    item_name: ''
  });
  const handleSubmit = event => {
      event.preventDefault();
  axios.post("https://backend-foodie-fun.herokuapp.com/api/meals", restaurant, {headers: {Authorization: localStorage.getItem("token")}})
  .then(res => {
      props.history.push('/')
  })

  }
  const handleChange = event => {
      setRestaurant({...restaurant, [event.target.name]: event.target.value})
  }
  return (
    <form className='form' onSubmit={handleSubmit}>

      <input
        type='text'
        placeholder='Restaurant Name'
        value={restaurant.restaurant_name}
        name="restaurant_name"
        onChange={handleChange}
      />

      <input
        type='text'
        placeholder='Restaurant Type'
        value={restaurant.restaurant_type}
        name="restaurant_type"
        onChange={handleChange}
      />

      <input 
      type='text' 
      placeholder='Item Name' 
      value={restaurant.item_name} 
      name='item_name'
      onChange={handleChange}
      />

      <button type='submit'>Add Restaurant</button>
    </form>
  );
};

export default RestaurantForm;
