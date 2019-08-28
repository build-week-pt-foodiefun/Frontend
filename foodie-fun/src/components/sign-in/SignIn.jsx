import React, {useState, useEffect} from 'react'
import {Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import './SignIn.styles.css'

import RegisterUser from '../register-user/RegisterUser.jsx'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Form as Forms, Header} from 'semantic-ui-react'




const SignIn = (props) => {
    // console.log(props)

    const { values, touched, errors } = props



    return (
        <div>
            <form>
                <Forms>
                <Header as='h3'>Sign In</Header>

                <Forms.Field>                    
                {touched.username && errors.username && <p className="error">{errors.username}</p> }
                <label>Username:</label>
                    <Field type="text" name="username" placeholder="username" />
                </Forms.Field>


                <Forms.Field>
                {touched.password && errors.password && <p className="error">{errors.password}</p> }
                <label>Password:</label>
                    
                    <Field type="password" name="password" placeholder="password"/>
                </Forms.Field>

                <Button basic color="green" className="button" type="submit">Login</Button>
                {/* <Button basic color="orange" className="button2" type="submit">Sign me up!</Button> */}
                           
                {/* <Route exact path='/registeruser' render={props => <RegisterUser {...props} />}></Route> */}
                <Link exact to="/registeruser">New user?</Link>

                </Forms>
            </form>
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
        axios.post('https://backend-foodie-fun.herokuapp.com/api/auth/login', values) 
        .then(res => {
            localStorage.setItem("token", res.data.token)
        console.log(res);
        setStatus(res);
        resetForm();            
        })
        .catch(error => {
            console.log(error);
        })
    }
})(SignIn)

export default FormikForm;
