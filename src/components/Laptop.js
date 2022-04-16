import React from 'react'
import pic from '../components/images/video.mp4';

function Laptop() {
  return (
    <div className='video-container'> 
        <video controls>
            <source src={pic} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Laptop