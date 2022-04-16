import React,{useState} from 'react'
import { DiApple } from 'react-icons/di'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import {HiMenuAlt4} from 'react-icons/hi'
import './css/header.css'

function Header() {
    const [icon,setIcon]=useState('content');
    const a=()=>{
        if (icon === "content") {
            setIcon(icon+" responsive");
        } else {
            setIcon("content")
        }
    }
    return (
        <div className='header'>
            <div className='head-container'>
                <div className='icon'>
                    <HiMenuAlt4 onClick={()=>{a()}} size={18}/>
                </div>
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