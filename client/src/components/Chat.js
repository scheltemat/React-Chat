import React from 'react'
import ChatterMessage from './ChatterMessage';
import UserMessage from './UserMessage';
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
      <div className='textSection'><input type="text"></input><input type="submit"></input></div>
    </>
  )
}

export default Chat