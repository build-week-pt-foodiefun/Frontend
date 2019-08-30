import React from 'react';
import { Form, Field,  withFormik } from 'formik';
import { Header, Button } from 'semantic-ui-react';
import * as yup from 'yup'
import axios from 'axios'



const RestaurantCard = (props) => {
    console.log(props)

    const { errors, touched } = props 




    return (
        <div>
            <Form className="container">
                <Header as='h3'>Restaurant Page</Header>

                {errors.restaurant_name && <p className='error'>{errors.restaurant_name}</p>}
                <label>Restaurant Name:</label>
                <Field type='text' name='restaurant_name' placeholder='Restaurant Name'/>

                {errors.restaurant_name && <p className='error'>{errors.restaurant_name}</p>}
                <label>Restaurant Type:</label>
                <Field type='text' name='restaurant_type' placeholder='Restaurant Type'/>

                {errors.restaurant_name && <p className='error'>{errors.restaurant_name}</p>}
                <label>Item Name (Required):</label>
                <Field type='text' name='item_name' placeholder='Item Name'/>

                {errors.restaurant_name && <p className='error'>{errors.restaurant_name}</p>}
                <label>Rate Food:</label>
                <Field type='text' name='food_rating' placeholder='Rate Food 1 to 5'/>

                {errors.restaurant_name && <p className='error'>{errors.restaurant_name}</p>}
                <label>Item Comment:</label>
                <Field type='text' name='item_comment' placeholder='Item Comment'/>

                {errors.restaurant_name && <p className='error'>{errors.restaurant_name}</p>}
                <label>Wait Time:</label>
                <Field type='text' name='wait_time' placeholder='Wait Time'/>

                {errors.restaurant_name && <p className='error'>{errors.restaurant_name}</p>}
                <label>Date Visited:</label>
                <Field type='text' name='date_visited' placeholder='Date Visited'/>

                <Button type="submit">Submit</Button>
            </Form>
            {/* <RestaurantForm />
            <h3>{props.restaurant_name}</h3>
            <p>{props.restaurant_type}</p>
            <p>{props.item_name}</p>
            <img src="props.item_photo" alt="Restaurant"/>
            <p>Rating: {props.food_rating}</p>
            <p>Wait Time: {props.wait_time}</p>
            <p>Comment: {props.comment}</p>             */}
        </div>
    )
}

const FormikFormRestaurancCard = withFormik({
    mapPropsToValues: ({restaurant_name, restaurant_type, item_name, food_rating, item_comment, wait_time, date_visited}) => {
        return {
            restaurant_name: restaurant_name || '',
            restaurant_type: restaurant_type || '', 
            item_name: item_name || '', 
            food_rating: food_rating || '',
            item_comment: item_comment || '', 
            wait_time: wait_time || '', 
            date_visited: date_visited || ''
        };
    },
    validationSchema: yup.object().shape({
        restaurant_name: yup.string()
        .required('Please enter a restaurant name.'),
        restaurant_type: yup.string()
        .required('Please enter a restaurant type.'),
        item_name: yup.string()
        .required('Please enter a item name.'),
        food_rating: yup.string()
        .required('Please rate the food.'),
        item_comment: yup.string(),
        // .required('Please enter comment.'),
        wait_time: yup.string(),
        // .required('Please enter wait time.'),
        date_visited: yup.string()
        // .required('Please enter date visited.')        
    }), 
    handleSubmit: (values, { setStatus, resetForm }) => {
        console.log('Restaurant request')
            axios.post('https://backend-foodie-fun.herokuapp.com/api/meals', values, {headers: {authorization: localStorage.getItem('token')}})
            .then(res => {
                localStorage.setItem('token', res.data.token)
            })
        console.log(values)
        setStatus(values);
        resetForm();
    }
})(RestaurantCard)

export default FormikFormRestaurancCard
