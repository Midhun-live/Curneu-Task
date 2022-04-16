import React from 'react'
import './css/lapgrid.css'
import lap1 from '../components/images/lap2.jpg'
import lap2 from '../components/images/lap1.jpg'
import lap3 from '../components/images/lap3.jpg'

function Lapgrid() {
    return (
        <div>
            <section className='photo-grid'>
                <div>
                    <img src={lap1} />
                </div>
                <div>
                    <img src={lap2} />
                </div>
                <div>
                    <img src={lap3} />
                </div>
            </section>
        </div>
    )
}

export default Lapgrid