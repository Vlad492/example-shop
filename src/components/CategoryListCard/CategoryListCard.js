import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function CategoryListCard(props) {
    return (
        <Card index={props.index} as={Link} to={{ pathname: `/goods/${props.index}` }} className="goodslist__card">
            <img src="https://via.placeholder.com/150" className="goodlist__img" />
            <Card.Body className='goodslist__body'>
                <Card.Title className='goodslist__cardtext'>Special title treatment</Card.Title>

                <Card.Text className='goodslist__cardtext'> With supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
            <hr className="goodslist__hr" />
            <p className="goodlist__price">100$</p>
            <hr className="goodslist__hr" />
            <Button variant="primary" className="goodslist__button">Add to cart</Button>
        </Card>
    )
}