import React from 'react'
import {Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import './sign-in.styles.css'

const SignIn = () => {
    return (
        <div>
            <Form>
                <label>
                    Username: 
                    <Field type="text" name="name" placeholder="username" />
                </label>

                <label>
                    Password: 
                    <Field type="email" name="password" placeholder="password"/>
                </label>
            </Form>
        </div>
    )
};

// Form HOC
const FormikForm = withFormik({

})(SignIn)

export default FormikForm;
