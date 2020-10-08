import React, { useState } from 'react'
import { Header } from '../exporter'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './goodsList.scss'

function GoodsList(props) {
    console.log(props.match.params.name)
    const [list, setList] = useState([1, 2, 3, 4, 5])
    const like = () => {
        console.log('liked')
    }
    const back = () => {
        props.history.goBack()
    }

    return (
        <>
            <Header />
            <div className="finderlist__navigation">
                    <p onClick={back} className="navigation__text finderlist__navigation-items"><i class="fas fa-chevron-left"/>Back</p>
                    <i class="fas fa-filter finderlist__navigation-items"></i>
                </div>
            <h3 className = "finderlist__title">Results for {props.match.params.name}</h3>
                
            <section className="finderlist__section">
               
                {list.map((elem, index) => {
                    return (
                        <Card key={index} as={Link} to={{ pathname: `/goods/${index}` }} className="goodslist__card">
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
                })}
            </section>
        </>
    )
}
export default withRouter(GoodsList)