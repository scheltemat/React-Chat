import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit= (e) => {
    e.preventDefault();

    //post data to database
    Axios.post("http://localhost:4200/createUser", {
      username: username, 
      email: email, 
      password: password 
    }).then((response) => {
      alert("Account registered successfully");
      console.log(response)
    })

    navigate("/login") //redirects to login when form is submitted

    // dispatch stuff would go here
  }

  return (
    <>
      <Card>
        <Card.Body>
          <div>
            <div className='card-title'>
              <h3>Register</h3>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="username" 
                  placeholder="Enter username" 
                  onChange={e => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  onChange={e => setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  onChange={e => setPassword(e.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Register
              </Button>

              <Form.Group className="mt-3" controlId="">
                <Form.Label>Already have an account? <a href='/login'>Login</a></Form.Label>
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Register