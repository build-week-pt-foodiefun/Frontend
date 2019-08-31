import React, {useState, useEffect} from 'react'
import axios from 'axios';

const RestaurantList = (props) => {
console.log(props)


const { restaurant } = props

const [listMeals, setListMeals] = useState()
    
useEffect(() => {
    axios.get("https://backend-foodie-fun.herokuapp.com/api/meals/", {headers: {Authorization: localStorage.getItem("token")}})
    .then(res => {
        setListMeals(res.data)
    })

}, [])
    if(!listMeals) return <div>loading</div>


return (
        <div>
            {listMeals.map(listMeal => (
            <div>
                <div>{listMeal.restaurant_name}</div>
            <div>{listMeal.restaurant_type}</div>
            <div>{listMeal.item_name}</div>    
            </div>
            ))}
            
        </div>
    )
}

export default RestaurantList;
