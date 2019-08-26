import React, {useState} from 'react';
import './App.css';

import SignIn from './components/sign-in/Sign-in.jsx'
import RegisterUser from './components/register-user/Register-user.jsx'

function App() {
  const [users, setUsers] = useState([])
  const addUser = user => {
    setUsers([...users, user])
  }

  return (
    <div className='App'>
    <RegisterUser />

      {/* <SignIn addUser={addUser} /> */}
      {users.map(user => (
        <div key={user.id}>
           <p>Username: {user.username}</p>
           <p>Password: {user.password}</p>
          {/* {JSON.stringify(user)} */}

        </div>
      
      ))}

    </div>
  );
}

export default App;
