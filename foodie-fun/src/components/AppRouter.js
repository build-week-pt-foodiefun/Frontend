import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import SignIn from './sign-in/SignIn.jsx'
import RegisterUser from './register-user/RegisterUser.jsx'
import RestaurantForm from './MenuPage/RestaurantForm.jsx';
import RestaurantList from './MenuPage/RestaurantList.jsx';


const AppRouter = () => {
    return (
        <div className="page-view">
            <Switch>
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/registeruser' component={RegisterUser} />
                <Route path='/restaurantform' render={props =>  <RestaurantForm {...props} /> } /> 
                <Route exact path="/" render={props =>  <RestaurantList {...props} />}/>

            </Switch>
        </div>
    )
}

export default AppRouter;
