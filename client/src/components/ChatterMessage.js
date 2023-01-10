import React from 'react'


const ChatterMessage = () => {
  return (
    <>
      <div className='row'>
        <div className='col userpfp'>
          <img src="/pfp_placeholder.png" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" height="50px" width="50px"/>
        </div>
        <div className='col ChatterMessage bg-light'>Lorem Ipsum</div>
      </div>
    </>
  )
}

export default ChatterMessage
