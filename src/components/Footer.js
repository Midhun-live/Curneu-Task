import React from 'react'
import './css/footer.css'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { BiCube } from 'react-icons/bi'
import { FaRegComments } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-zero'>
                <div className='foot-zero-container'>
                    <div>
                        <HiOutlineCurrencyRupee size={50} color="grey"/>
                        <p className='foot-zero-heading'>Ways to Buy</p>
                        <p>Buy the way that’s right for you.</p>
                    </div>
                    <div>
                        <BiCube size={50} color="grey"/>
                        <p className='foot-zero-heading'>Free delivery</p>
                        <p>Get free delivery direct to your door.</p>
                    </div>
                    <div>
                        <FaRegComments size={50} color="grey" />
                        <p className='foot-zero-heading'>Get help buying</p>
                        <p>Have a question? Call a Specialist or chat online.Call 000800 040 1966.</p>
                    </div>
                </div>
            </div>
            <div className='footer-one'>
                <div className='foot-one-container'>
                    <hr />
                    <p>*Listed pricing is Maximum Retail Price (inclusive of all taxes).</p>
                    <ol>
                        <li>Actual diagonal screen size is 59.69 centimetres (23.5 inches).</li>
                        <li>Compared with 21.5-inch iMac.</li>
                        <li>Testing conducted by Apple in March 2021 using pre-production 24-inch iMac systems with Apple M1 chip and 8-core GPU, as well as production 3.0GHz 6-core Intel Core i5–based 21.5-inch iMac systems with Radeon Pro 560X with 4GB of GDDR5 memory, all configured with 8GB RAM and 256GB SSD. Open source project built with pre-release Xcode 12.5 with Apple Clang 12.0.5, Ninja 1.10.0.git and CMake 3.16.5. Affinity Photo 1.9.1 tested using the built-in benchmark version 1900. Performance tests are conducted using specific computer systems and reflect the approximate performance of iMac.</li>
                        <li>Magic Keyboard with Touch ID is included with the 24‑inch iMac systems with Apple M1 chip and 8‑core GPU and is available as an option on systems with 7‑core GPU.</li>
                    </ol>
                    <p>Software and content may be sold separately. Title availability is subject to change.</p>
                    <hr />
                </div>
            </div>
            <div className='footer-two'>
                <div className='foot-two-container'>
                    <div>
                        <h4 className='head-color'>Shop and Learn</h4>
                        <p>Store</p>
                        <p>Mac</p>
                        <p>iPad</p>
                        <p>iPhone</p>
                        <p>Watch</p>
                        <p>AirPods</p>
                        <p>TV & Home</p>
                        <p>iPod touch</p>
                        <p>AirTag</p>
                        <p>Accessories</p>
                    </div>
                    <div>
                        <h4 className='head-color'>Services</h4>
                        <p>Apple Music</p>
                        <p>Apple TV+</p>
                        <p>Apple Arcade</p>
                        <p>iCloud</p>
                        <p>Apple One</p>
                        <p>Apple Books</p>
                        <p>Apple Podcasts</p>
                        <p>App Store</p>
                        <h4 className='head-color'>Account</h4>
                        <p>Manage Your Apple ID</p>
                        <p>Apple Store Account</p>
                        <p>iCloud.com</p>
                    </div>
                    <div>
                        <h4 className='head-color'>Apple Store</h4>
                        <p>Ways to Buy</p>
                        <p>Apple Trade In</p>
                        <p>Recycling Programme</p>
                        <p>Order Status</p>
                        <p>Shopping Help</p>
                    </div>
                    <div>
                        <h4 className='head-color'>For Business</h4>
                        <p>Apple and Business</p>
                        <h4 className='head-color'>For Education</h4>
                        <p>Apple and Education</p>
                        <p>Shop for Education</p>
                        <p>Shop for University</p>
                        <h4 className='head-color'>For Healthcare</h4>
                        <p>Apple in Healthcare</p>
                        <p>Health on Apple Watch</p>
                    </div>
                    <div>
                        <h4 className='head-color'>Apple Values</h4>
                        <p>Accessibility</p>
                        <p>Environment</p>
                        <p>Privacy</p>
                        <p>Supplier Responsibility</p>
                        <h4 className='head-color'>About Apple</h4>
                        <p>Newsroom</p>
                        <p>Apple Leadership</p>
                        <p>Career Opportunities</p>
                        <p>Investors</p>
                        <p>Ethics & Compliance</p>
                        <p>Events</p>
                        <p>Contact Apple</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer