import React from 'react'
import { category } from '../assets/pages'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className='category'>
            <div className="category-container">
                {
                    category.map((item, index) => (
                        <div key={index} className='section-category'>
                            <Link to={`${item.path}`}>
                                <h1>{item.name}</h1>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
