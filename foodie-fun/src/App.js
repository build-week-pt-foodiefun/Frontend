import React from 'react';
// import './App.css';
// import '../src/';


import AppRouter from './components/AppRouter'
import SignIn from './components/sign-in/SignIn.jsx'
import RegisterUser from './components/register-user/RegisterUser.jsx'
import TabNav from './components/TabNav';

function App() {

  return (
    <div className='App'>
      <main>
        {/* <SignIn /> */}
        {/* <RegisterUser /> */}
        <TabNav />
        <AppRouter />

      </main>
    {/* <RegisterUser /> */}

      {/* <SignIn /> */}
    
    {/* <Route path='/sign-in' component={SignIn}/> */}
    
    {/* <Link to='/sign-in'></Link> */}


    </div>
  );
}

export default App;
