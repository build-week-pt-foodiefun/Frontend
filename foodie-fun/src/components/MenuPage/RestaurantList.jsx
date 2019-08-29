import React,{ useState, useEffect } from 'react'
import {Form, Field, withFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios';

import {Link} from 'react-router-dom';
import {Button, Form as Froms, Header } from 'semantic-ui-react';

const RestaurantList = (props) => {
const [restaurant, setrestaurant] = useState([])

const { values } = props



useEffect(() => {
    axios
    .post("https://backend-foodie-fun.herokuapp.com/api/meals", values, {headers: {authorization: localStorage.getItem('token')}})
    .then(res => {
        localStorage.setItem('token', res.data.token)
        console.log(res)
    })
})
.catch(error => {
    console.log(error)
}, [])
    
    return (
        <div>
            
        </div>
    )
}

const RestaurantListPage = withFormik({})(RestaurantList)

export default RestaurantListPage
