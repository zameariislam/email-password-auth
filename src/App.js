import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import app from './firebase.init'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from "react-bootstrap";


const auth = getAuth(app)

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailBlur = (e) => {
    setEmail(e.target.value)

  }
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
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


 
     

  return (
    <div className="w-50 mx-auto mt-2">
      <h2 className="text-primary">Please Register</h2>
      <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required onBlur={handlePasswordBlur} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   
  );
}
  




export default App;