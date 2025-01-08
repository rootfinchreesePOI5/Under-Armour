import React from 'react'
import uaName from '../assets/Icons/underarmour_name.svg'
import { Link } from 'react-router-dom'
import logo from '../assets/Icons/logo.svg'
import master from '../assets/Icons/Mastercard.svg'
import union from '../assets/Icons/UnionPay_150px.svg'
import visa from '../assets/Icons/Visa_150px.svg'
import amex from '../assets/Icons/AMEX_150px.svg'
import { table_data } from '../assets/pages'
import insta from '../assets/Icons/insta.svg'
import you from '../assets/Icons/you.svg'
import face from '../assets/Icons/face.svg'

const Footer = () => {
  return (
    <div className='Footer'>
     <div className='footer-container'>
         {/* left */}
      <div className='footer-item1'>
        <img className='uaName' src={uaName} alt="" />
        <p className='stay'>STAY IN THE LOOP</p>
        <div className='stay-in-loop'>
            <input type="email" placeholder='Email Address' />
            <button>Submit</button>
        </div>
        <div className="terms">
            <p>By providing your email, you agree to the Terms & Conditions and Privacy Policy. You may unsubscribe later.</p>
        </div>
        <Link className='uaApp' to={'/ua-App'}>
        <img src={logo} alt="" />
        </Link>
        <p>Accepted Payment Methods</p>
        <div className="payment-methods">
            <img src={master} alt="" />
            <img src={union} alt="" />
            <img src={amex} alt="" />
            <img src={visa} alt="" />
        </div>
      </div>
      {/* right */}
      <div className='footer-item2'>
        <ul>
            {
                table_data.map((item , index)=>{
                    return <li key={index}>
                        <h4>{item.h}</h4>
                        <p>{item.t1}</p>
                        <p>{item.t2}</p>
                        <p>{item.t3}</p>
                        </li>
                })
            }
        <div className="socials">
            <h4>Ua Social</h4>
            <p><img src={insta} alt="" /> <span>Instagram</span></p>
            <p><img src={you} alt="" /> <span>Youtube</span></p>
            <p><img src={face} alt="" /> <span>Facebook</span></p>
        </div>
        </ul>
      </div>
     </div>
    </div>
  )
}

export default Footer
