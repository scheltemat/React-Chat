import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Register = () => {

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
                <Form.Control type="username" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
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