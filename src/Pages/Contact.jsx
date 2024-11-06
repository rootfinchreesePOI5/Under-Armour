import React from 'react'
import logo from '../assets/Icons/UA_logo.svg'
import ua from '../assets/Icons/logo.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='Contact'>
      <div className="contact-heading">
        <img src={logo} alt="" />
        <h1>HOW CAN I CONTACT UA?</h1>
      </div>
      <div className="contact-container">
        <div className="contact-item">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder='Enter your name' required />
            <input type="email" name="email" placeholder='Enter your email' required />
            <textarea name="message" rows={10} placeholder='Your Message' required></textarea>

            <button className='submit' type="submit"><img src={ua} alt="" /> Submit Form</button>

          </form>
          <span>{result}</span>
        </div>
        <div className="contact-item-2">
          <div className="item">
            <h1>General Information:</h1>
            <h5>Main Office:</h5>
            <address>
              <p>Under Armour Sports Southeast Asia Pte Ltd</p>
              <p>Suntec Tower ONE</p>
              <p>7 Temasek Blvd, #25-01</p>
              <p>Singapore 038986  </p>
            </address>
            <p>Phone: 007 803 651 0087</p>
          </div>
          <div className="item">
            <h1>Under Armour Store:</h1>
            <p>Please go to "Store Locator" to find the Under Armour store near you.</p>
          </div>
          <div className="item">
            <h1>Customer Service:</h1>
            <p>A member of the customer service team is waiting to assist you with all product, service, and ordering questions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
