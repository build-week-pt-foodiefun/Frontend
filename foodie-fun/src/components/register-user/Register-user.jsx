import React, {useState, useEffect} from 'react'
import {Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'


const RegisterUser = (props) => {
    console.log(props)

    const [regUsers, setRegUser] = useState([])

    const { values, touched, errors, status} = props
    useEffect(() => {
        if(status) {
            setRegUser([...regUsers, status])
        }
    }, [status])

    return (        
        <Form>

        <label> Register User</label>

        {touched.username && errors.username && <p className="error">{errors.username}</p>}
        <label>
            Username:
        <Field type="text" name="username" placeholder="username" />
        </label>

        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <label>
            Password:
        <Field type="password" name="password" placeholder="password" />
        </label>

        {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}        
            <label>
            <Field type="checkbox" name='tos'/>
            Agree to TOS 
            </label>

        {/* <label>
            Email: 
        <Field type="email" name="email" placeholder="email" />
        </label> */}

        <button type="submit">Submit</button>

        {regUsers.map(regUser => <div key={regUser.id}>{JSON.stringify(regUser)}</div>)}


        </Form>
        
    )
}

const FormikForm = withFormik({
    mapPropsToValues: ({username, password, email, tos}) => {
        return {
            username: username || '',
            password: password || '',
            tos: tos || false,
        }
    },
    validationSchema: yup.object().shape({
        username: yup.string()
        .required('Please enter your username'),
        password: yup.string()
        .required('You password is required.'),
        tos: yup.boolean()
        .oneOf([true], "You gotta")
        .required()
    }),
    handleSubmit: (values, {resetForm, setStatus, setErros}) => {
        axios.post('https://reqres.in/api/users', values)
        .then(res => {
            setStatus(res);
            resetForm();
        })
        .catch(error => {
            console.log(error)
        })
    }
})(RegisterUser)

export default FormikForm;
