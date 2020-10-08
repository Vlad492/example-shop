import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard(props) {
    return (
        <Link to={{ pathname: `/categories/${props.name}` }} >
            <div className='categorieslist__card' >
                <img className='categorieslist__img' src="https://via.placeholder.com/300x250" />
                <div className='categorieslist__transparent-description'></div>
                <div className="categorieslist__description">
                    <p className="categorieslist__text">{props.name}</p>
                </div>


            </div>
        </Link>
    )
}