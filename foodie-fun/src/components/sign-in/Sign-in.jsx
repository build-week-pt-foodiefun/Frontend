import React, {useState, useEffect} from 'react'
import {Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import './sign-in.styles.css'
import styled from 'styled-components'




const SignIn = (props) => {
    // console.log(props)
    // data submit into component
    // const [users, setUsers] = useState([])
    const { values, touched, errors, status } = props
    useEffect(() => {        
        if(status){
        props.addUser(status)
            // setUsers([...users, status])
        }
    }, [status])

    return (
        <div>
            <Form>
                <label>Sign In</label>
                
                {touched.username && errors.username && <p className="error">{errors.username}</p> }
                <label>
                    Username: 
                    <Field type="text" name="username" placeholder="username" />
                </label>

                {touched.password && errors.password && <p className="error">{errors.password}</p> }
                <label>
                    Password: 
                    <Field type="password" name="password" placeholder="password"/>
                </label>
                <button type="submit">Submit</button>
                {/* {users.map(user => <div key={user.id}>{JSON.stringify(user)}</div> )} */}
            
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
