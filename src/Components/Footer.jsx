import React from 'react'
import UA_name from '../assets/Icons/underarmour_name.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-items">
                    <img src={UA_name} alt="" />
                    <h1>Stay in the loop</h1>
                    <p>Sign up for email updates today.</p>
                    <div className="sign-up">
                        <label >Email Address*</label>
                        <div className="input">
                            <input type="email" />
                            <button>sign up</button>
                        </div>
                    <p>By providing your email, you agree to the Terms of Use and Privacy Policy. You may later unsubscribe</p>
                    </div>
                </div>
                <div className="payment-method">
                    
                </div>
                <div className="footer-items"></div>
            </div>
        </div>
    )
}

export default Footer
