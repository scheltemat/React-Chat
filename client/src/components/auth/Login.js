import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const {setAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //post data to database
    Axios.post("http://localhost:4200/login", {
      username: username,
      password: password 
    }).then((res) => {
      //checking jwt
      if(res.data.user){
        // console.log(res.data)
        setAuth(true)
        localStorage.setItem('token', res.data.user)
        navigate("/") //redirects to protected page
      } else {
        // console.log("fail")
        setErrorMessage("Incorrect username or password")
      }
    })
    .catch((err) => {
      console.warn(err)
    })
  }

  return (
    <>
      <div className='flex-container'>
        <Card className=''>
          <Card.Body>
            <div>
              <div className='card-title'>
                <h3>Login</h3>
              </div>
              
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    type="username" 
                    placeholder="Enter username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Login
                </Button>

                {errorMessage ? (
                  <div>
                    <br></br>
                    <div>
                      {errorMessage}
                    </div>
                  </div>
                  ) : null
                }

                <Form.Group className="mt-3" controlId="">
                  <Form.Label>Need an account? <a href='/register'>Register</a></Form.Label>
                </Form.Group>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Login