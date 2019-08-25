import React from 'react'
import {Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import './sign-in.styles.css'
import ErrorWithStack from 'jest-util/build/ErrorWithStack';

const SignIn = (props) => {
    console.log(props)
    return (
        <div>
            <Form>
                {props.errors.username && <p className="error">{props.errors.username}</p> }
                <label>
                    Username: 
                    <Field type="text" name="username" placeholder="username" />
                </label>

                {props.errors.password && <p className="error">{props.errors.password}</p> }
                <label>
                    Password: 
                    <Field type="email" name="password" placeholder="password"/>
                </label>
                <button type="submit">Submit</button>
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
        .required('Please enter you username.'),
        password: yup.string()
        .required('You password is required.')
    })
})(SignIn)

export default FormikForm;
