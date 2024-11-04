import React from 'react'
import { Link } from 'react-router-dom'

const Title2 = ({title , details}) => {
    return (
        <div className="tshirt-content">
            <h1>{title}</h1>
            <p>{details}</p>
            <Link to='/ua-shirts'><button className='btn2'>Learn More</button></Link>
            <Link to='/categories'><button className='btn2'>Shop Now</button></Link>
        </div>
    )
}

export default Title2
