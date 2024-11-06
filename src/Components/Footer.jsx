import React from 'react'
import UA_name from '../assets/Icons/underarmour_name.svg'
import master from '../assets/Icons/Mastercard.svg'
import visa from '../assets/Icons/Visa_150px.svg'
import amex from '../assets/Icons/AMEX_150px.svg'
import union from '../assets/Icons/UnionPay_150px.svg'
import { table_data } from '../assets/pages'
import insta from '../assets/Icons/insta.svg'
import you from '../assets/Icons/you.svg'
import face from '../assets/Icons/face.svg'
import {Link} from 'react-router-dom'
import { redirect } from 'react-router-dom'
const Footer = () => {

    const table = table_data.map((item, index) => (
        <tr key={index}>
            <td>{item.t1}</td>
            <td>{item.t2}</td>
            <td>{item.t3}</td>
        </tr>
    ))

    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-item-1">
                    <img className='Ua' src={UA_name} alt="" />
                    <h1>Stay in the loop.</h1>
                    <p className='sign-p'>Sign up for email updates today.</p>
                    <div className="sign-up">
                        <label >Email Address*</label>
                        <div className="input">
                            <input type="email" />
                            <button className='sign_up'>Sign up</button>
                        </div>
                        <p>By providing your email, you agree to the Terms of Use and Privacy Policy. You may later unsubscribe</p>
                    </div>
                    <div className="payment-method">
                        <h2>Accepted Payment Methods</h2>
                        <div className="method-img-container">
                            <img src={master} alt="" />
                            <img src={visa} alt="" />
                            <img src={amex} alt="" />
                            <img src={union} alt="" />
                        </div>
                    </div>
                    <div className="copy">
                        <p>© 2024 Under Armour®, Inc.
                            Privacy Policy / Terms of Use / Cookie Preferences</p>
                    </div>
                </div>
                <div className="footer-item-2">
                    <table>
                        <thead>
                            <tr>
                                <th>Phone Support</th>
                                <th>Customer Service</th>
                                <th>About Under Armour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                    <div className="socials">
                        <h4>Ua Socials</h4>
                        <div className="socials-container">
                        <Link to={'https://www.instagram.com/underarmour/'}><div className="social-item">
                                 <img src={insta} alt="" />
                                 <p>Instagram</p>
                              </div>
                        </Link>
                        <Link to={'https://www.youtube.com/user/underarmour'}><div className="social-item">
                            <img src={you} alt="" />
                            <p>Youtube</p>
                        </div>
                        </Link>
                        <Link to={'https://www.facebook.com/UnderArmour/'}><div className="social-item">
                            <img src={face} alt="" />
                            <p>FaceBook</p>
                        </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
