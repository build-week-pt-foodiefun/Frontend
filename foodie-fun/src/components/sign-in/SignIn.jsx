import React, {useEffect} from 'react'
import {Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import './SignIn.styles.css'

import { Link } from 'react-router-dom'
import { Button, Form as FormA, Header} from 'semantic-ui-react'


const SignIn = (props) => {

    const { values, status, touched, errors, history } = props

    useEffect(() => {
        if (status){
            console.log('request')
            axios.post('https://backend-foodie-fun.herokuapp.com/api/auth/login', values, {headers: {authorization: localStorage.getItem('token')}}) 
            .then(res => {
                localStorage.setItem("token", res.data.token)
            console.log(res);
            history.push('/restaurantform')
         
            })
            .catch(error => {
                console.log(error);
            })
        }
    }, [status])

    return (
        <div >
            <Form className="container">
                <FormA className="form">
                <Header as='h3'>Sign In</Header>

                <FormA.Field>                    
                {touched.username && errors.username && <p className="error">{errors.username}</p> }
                <label>Username:</label>
                    <Field type="text" name="username" placeholder="username" />
                </FormA.Field>

                <FormA.Field>
                {touched.password && errors.password && <p className="error">{errors.password}</p> }
                <label>Password:</label>                    
                    <Field type="password" name="password" placeholder="password"/>
                </FormA.Field>
             
                <Button basic color="green" className="button" type="submit">Login</Button>

                <Link to="/registeruser">New user?</Link>

                </FormA>
            </Form>
        </div>
    )
};

// Form HOC
const FormikForm = withFormik({
    mapPropsToValues: ({ username, password }) => {
        return {
            username: username || '',
            password: password || '',
        };
    },
    validationSchema: yup.object().shape({
        username: yup.string()
        .required('Please enter your username.'),
        password: yup.string()
        .required('You password is required.')
    }),
    handleSubmit: (values, { setStatus,resetForm }) => {
        console.log('request')
        // axios.post('https://backend-foodie-fun.herokuapp.com/api/auth/login', values, {headers: {authorization: localStorage.getItem('token')}}) 
        // .then(res => {
        //     localStorage.setItem("token", res.data.token)
        console.log(values);
        setStatus(values);
        resetForm();            
        }

})(SignIn)

export default FormikForm;
