import React from 'react'
import { DiApple } from 'react-icons/di'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import './css/header.css'

function Header() {
    return (
        <div className='header'>
            <div className='head-container'>
                <div>
                    <DiApple size={18}/>
                </div>
                <div className='content'>
                    <p>Store</p>
                    <p>Mac</p>
                    <p>iPad</p>
                    <p>iPhone</p>
                    <p>Watch</p>
                    <p>AirPods</p>
                    <p>TV & Home</p>
                    <p>Only on Apple</p>
                    <p>Accessories</p>
                    <p>Support</p>
                    <AiOutlineSearch size={18} />
                </div>
                <div>
                    <BsBag size={15} />
                </div>
            </div>
        </div>
    )
}

export default Header