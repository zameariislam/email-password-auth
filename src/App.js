import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import app from './firebase.init'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";


const auth = getAuth(app)

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registered, setRegistered] = useState(false)
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');


  const handleEmailBlur = (e) => {
    setEmail(e.target.value)

  }
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError('password should contain atleast one Upercase letter')
      return;

    }
    setError('')

    setValidated(true);

    // Existing User 

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
         console.log(error)
        });

    }

    // new User 
else{
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        console.log(error)

        // ..
      });
}
    

  }
  const handleRegisteredChange = (e) => {
    setRegistered(e.target.checked)

  }

  return (
    <div className="w-50 mx-auto mt-2">
      <h2 className="text-primary">{registered ? 'please logIn' : 'Please Register'}</h2>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
          <Form.Control.Feedback type="invalid">
            Please provide a Email.
          </Form.Control.Feedback>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onChange={handleRegisteredChange} type="checkbox" label="already registerd ?" />
        </Form.Group>
        <Form.Text>{error}</Form.Text>

        <Button variant="primary" type="submit">
          {registered ? 'LogIn' : 'Register'}
        </Button>
      </Form>
    </div>

  );
}





export default App;