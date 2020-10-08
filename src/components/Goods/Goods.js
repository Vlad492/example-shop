import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../exporter'
import { withRouter } from 'react-router'
import { Tab, Tabs, Carousel } from 'react-bootstrap'
import GoodsTab, { Goodstab } from '../GoodsTab/GoodsTab'
import './Goods.scss'
function Goods(props) {
    console.log(props)
    const [key, setKey] = useState('home');
    const like = () => {
        console.log('liked')
    }
    const back = () => {
        props.history.goBack()
    }
    return (<>
        <Header />
        <div className="goods">
            <div className="goods__navigation">
                <p onClick={back} className="navigation__text">Back</p>
                <div className="goods__navigation-icons">
                    <i className="fas fa-heart goods__navigation-icon"></i>
                    <i className="far fa-heart goods__navigation-icon"></i>
                    <i className="fas fa-cart-arrow-down goods__navigation-icon"></i>
                    <i className="fas fa-shopping-cart goods__navigation-icon"></i>
                </div>

            </div>
            <section className="goods__section">
                <div className='goods__header'>
                    <h3>Hello</h3>
                    <hr />
                </div>
                <div className='goods__body'>
                    <Carousel className="goods__carousel">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/350x200"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/350x200"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/350x200"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className='goods__info'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper quis libero ut pharetra. Sed gravida maximus ipsum non ultrices. Morbi in posuere odio. Etiam molestie neque sed ipsum luctus iaculis. Proin eu mauris egestas, tristique nisi eu, imperdiet odio. Praesent vehicula hendrerit sapien non imperdiet. Nullam nec tortor quis felis convallis rutrum vitae sit amet neque. Sed eu ultrices leo.</p>
                    </div>
                </div>
                <div className='goods__description'>
                    <GoodsTab />
                </div>


            </section>
        </div>

    </>
    )
}


export default withRouter(Goods)