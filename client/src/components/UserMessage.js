import React from 'react'

const UserMessage = () => {
  return (
    <>
      <div className='row'>
          <div className='col userMessage bg-light'>Hello World</div>
          <div className='col userpfp'>
            <img src="/pfp_placeholder.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" height="50px" width="50px"/>
          </div>
      </div>
    </>
  )
}

export default UserMessage
