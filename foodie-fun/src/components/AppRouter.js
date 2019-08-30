import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import SignIn from './sign-in/SignIn.jsx'
import RegisterUser from './register-user/RegisterUser.jsx'
import RestaurantCard from './MenuPage/RestaurantCard'


const AppRouter = () => {
    return (
        <div className="page-view">
            <Switch>
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/registeruser' component={RegisterUser} />
                <Route path='/restaurantcard' render={props =>  <RestaurantCard {...props} /> } />

                {/* <Route component={WelcomePage} /> */}
            </Switch>
        </div>
    )
}

export default AppRouter;
