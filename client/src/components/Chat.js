import React from 'react'
import Button from 'react-bootstrap/Button';

const Chat = () => {
  return (
    <>
      <div className='row'>
        <div className='col-6'>Other Messages</div>
        <div className='col-6'>Your Messages</div>
      </div>
      
      <input type="text"></input><Button>Send</Button>
    </>
  )
}

export default Chat