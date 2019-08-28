import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import SignIn from './sign-in/SignIn.jsx'
import RegisterUser from './register-user/RegisterUser.jsx'

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/registeruser' component={RegisterUser} />
                <Route component={WelcomePage} />
            </Switch>
        </div>
    )
}

export default AppRouter;
