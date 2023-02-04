import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ChatterMessage from './ChatterMessage';
import UserMessage from './UserMessage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

const Chat = () => {

  const navigate = useNavigate();

  useEffect(() => {

    // const token = localStorage.getItem('token')
    // if(token){
    //   // const user = jwt.decode(token)
    //   if(!user){
    //     localStorage.removeItem('token')
    //     navigate('/login')
    //   }
    // }
    
  }, [])
  
  
  return (
    <>
      <div className='header-area'>
        <div className='right d-flex justify-content-end me-3'>
          <div className='d-flex align-items-center'>
            <div>
              username
            </div>
            <div className='userpfp'>
              <img src="/pfp_placeholder.png" alt='profile-pic'></img>
            </div>
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