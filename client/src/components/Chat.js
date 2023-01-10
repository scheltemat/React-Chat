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
        <div className='right d-flex justify-content-end me-3'>
          <div>
            username
            <img src="/pfp_placeholder.png" height="50px" width="50px"></img>
          </div>
        </div>
      </div>

      <div className='message-area'>
        <div>
          <div className='right d-flex justify-content-end'>
            <UserMessage />
          </div>
          <div className='left d-flex justify-content-start'>
            <ChatterMessage />
          </div>
          <div className='right d-flex justify-content-end'>
            <UserMessage />
          </div>
          <div className='left d-flex justify-content-start'>
            <ChatterMessage />
          </div>
          <div className='right d-flex justify-content-end'>
            <UserMessage />
          </div>
          <div className='left d-flex justify-content-start'>
            <ChatterMessage />
          </div>
        </div>
      </div>
      
      <div className='text-area'>
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
      </div>
    </>
  )
}

export default Chat