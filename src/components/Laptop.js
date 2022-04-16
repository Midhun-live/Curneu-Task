import React from 'react'
import pic from '../components/images/video.mp4';
import './css/laptop.css'

function Laptop() {
  return (
    <div> 
        <video className='video-container' autoPlay loop>
            <source src={pic} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Laptop