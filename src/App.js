import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import app from './firebase.init'
import 'bootstrap/dist/css/bootstrap.min.css';

const auth = getAuth(app)

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)

  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(email, password)

  }
  return (
    <div>
      <form onSubmit={handleFormSubmit} >
        <input onBlur={handleEmailChange} type="email" /> <br />
        <input onBlur={handlePasswordChange} type="password" /> <br />
      <input type="submit" value="LogIn" />

      </form>

    </div>
  );
};

export default App;