import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import { pages } from '../assets/pages'

const Connect = () => {
    return (
        <div className='connect'>
            <Title head="Give Them Our Latest & Greatest" details="" />
            <div className="connect-container">

                <div className="connect-items" >
                    {
                        pages.map((item, index) => (
                            <Link to={`${item.path}`} key={index}>
                                <div  className='c-item' >
                                    <div className="img" style={{ backgroundImage: `url(${item.img})` }}>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Connect
