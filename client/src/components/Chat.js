import React from 'react'
import ChatterMessage from './ChatterMessage';
import UserMessage from './UserMessage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

const Chat = () => {
  
  return (
    <>
      <div className='headerSection'>
        Header section
      </div>
      <div>
        <div className=' right d-flex justify-content-end'>
          <UserMessage />
        </div>
        <div className=' left d-flex justify-content-start'>
          <ChatterMessage />
        </div>
      </div>
      <Form>
        <Form.Group className="mt-3" controlId="text">
          <div className='d-flex'>
            <Form.Control type="text" placeholder="Message" />
            <Button variant="info" type="submit">
              Send
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  )
}

export default Chat