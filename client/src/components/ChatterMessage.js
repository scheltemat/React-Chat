import React from 'react'


const ChatterMessage = () => {
  return (
    <>
      <div className='row'>
        <div className='col-1 userpfp'>
          <img src="/pfp_placeholder.png" alt=""/>
        </div>
        <div className='col chatterMessage bg-light'>
          <p className='messagecontent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem beatae, modi deleniti commodi alias harum quam eveniet animi. Quae perspiciatis sapiente, repudiandae nobis nesciunt distinctio officia quam laboriosam iste?</p>
        </div>
      </div>
    </>
  )
}

export default ChatterMessage