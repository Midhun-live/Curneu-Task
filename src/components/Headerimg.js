import React from 'react'
import image from '../components/images/top.jpg'
import './css/headerimg.css'

function Headerimg() {
  return (
    <div>
        <img className='image' src={image} alt='not found'/>
    </div>
  )
}

export default Headerimg