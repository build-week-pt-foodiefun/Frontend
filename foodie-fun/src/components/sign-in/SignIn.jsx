import React, {useEffect} from 'react'
import {Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import './SignIn.styles.css'


import { Link } from 'react-router-dom'
import { Button, Form as Forms, Header} from 'semantic-ui-react'




const SignIn = (props) => {
    // console.log(props)

    const { values, status, touched, errors, history } = props

    useEffect(() => {
        if (status){
            console.log('request')
            axios.post('https://backend-foodie-fun.herokuapp.com/api/auth/login', values, {headers: {authorization: localStorage.getItem('token')}}) 
            .then(res => {
                localStorage.setItem("token", res.data.token)
            console.log(res);
            history.push('/restaurantcard')
         
            })
            .catch(error => {
                console.log(error);
            })
        }
    }, [status])



    return (
        <div >
            <Form className="container">
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

               {/* <Route path="/"  */}
             
                <Button basic color="green" className="button" type="submit">Login</Button>
       

                           
                <Link to="/registeruser">New user?</Link>

                </Forms>
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
