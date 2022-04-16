import React,{useState,useEffect} from 'react'
import './css/header2.css'

function Header2() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        })
    }, [])
    return (
        <div className={show ? 'header2 show': 'header2'}>
            <div className='header2container'>
                <div>
                    <h3>iMac 24″</h3>
                </div>
                <div className='head2content'>
                    <p>Overview</p>
                    <p>Why Mac</p>
                    <p>Tech Specs</p>
                    <button className='Button'>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Header2