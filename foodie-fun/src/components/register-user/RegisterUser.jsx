import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import './RegisterUser.styles.css';

import { Button, Form as FormA, Header } from 'semantic-ui-react';

const RegisterUser = props => {

  const { touched, errors } = props;

  return (
    <div>
      <Form className="container">
        <FormA>
          <Header as='h3'>Register User</Header>

          <FormA.Field>
          {touched.username && errors.username && <p className='error'>{errors.username}</p>}
           <label>Username:</label> 
            <Field type='text' name='username' placeholder='username' />
          </FormA.Field>

          <FormA.Field>
          {touched.password && errors.password && <p className='error'>{errors.password}</p>}
          <label>Password:</label>
            <Field className="field" type='password' name='password' placeholder='password' />
          </FormA.Field>

          <Button basic color="green" className="button" type='submit'>Sign me Up!</Button>

        </FormA>
      </Form>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues: ({ username, password, email, tos }) => {
    return {
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('You password is required.')
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    axios
      .post(
        'https://backend-foodie-fun.herokuapp.com/api/auth/register',
        values
      )
      .then(res => {
        setStatus(res);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(RegisterUser);

export default FormikForm;
