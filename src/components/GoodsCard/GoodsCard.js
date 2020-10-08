import React from "react"
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function GoodsCard() {
    return (
        <Card as={Link} to = '/goods/1'>
            <Card.Img variant="top" src="https://via.placeholder.com/450x300" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}