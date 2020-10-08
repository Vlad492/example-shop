import React from 'react'
import { Header } from "../exporter";
import { withRouter } from 'react-router'
import './Order.scss'

function Order(props) {
    console.log(props)
    const order = { id: 12345315, orderStatus: 'Confirmed', date: '14.08.2020 14:15', billingStatus: 'Paid', amount: '26550 UAH', goods: [{ id: 1, quantity: 2, name: 'Razer', price: 990, img: 'https://via.placeholder.com/100x100' }, { id: 2, quantity: 1, name: 'Apple', price: 990, img: 'https://via.placeholder.com/100x100' }, { id: 3, quantity: 1, price: 990, name: 'Samsung', img: 'https://via.placeholder.com/100x100' }] }
    const back = () => {
        props.history.goBack()
    }
    return (
        <>
            <Header />
            <div className="order-section">
                <div className="order-section__header">
                    <div className="order-section__header_navigation">
                        <p onClick={back} className="header__navigation_text"><i class="fas fa-chevron-left" />Back</p>
                        <i class="fas fa-filter"></i>
                    </div>
                    <h4 className="order-section__header_h4"> Order №{order.id}</h4>
                </div>
                <div className="order-section__body">
                    <div className="order-section__body_info">
                        <div className="order-section__body_info-status body-info">
                            <p>Status: </p><p>{order.orderStatus}</p>
                        </div>
                        <div className="order-section__body_info-date body-info">
                            <p>OrderDate: </p><p>{order.date}</p>
                        </div>

                        <div className="order-section__body_info-billing body-info">
                            <p>Status: </p><p>{order.billingStatus}</p>
                        </div>

                        <div className="order-section__body_info-amount body-info">
                            <p>Amount: </p><p>{order.amount}</p>
                        </div>
                        <div className="order-section__footer">
                            <button className="order-section__footer_button btn btn-primary">Return order</button>

                        </div>

                    </div>
                    <div className="order-section__body_goods">
                        <p className="order-section__body_goods-text">Goods:</p>
                        {order.goods.map((elem, index) => {
                            return (
                                <div className="order-section__body_goods-card">
                                    <img src={elem.img} />
                                    <div className="goods-card__name card-inner">
                                        <h5>{elem.name}</h5>
                                    </div>
                                    <hr className="goods-card__hr" />
                                    <div className="goods-card__price card-inner">
                                        <p>Price:</p>
                                        <p>{elem.price}</p>
                                    </div>
                                    <hr className="goods-card__hr" />
                                    <div className="goods-card__quantity card-inner">
                                        <p>Quantity:</p>
                                        <p>{elem.quantity}</p>
                                    </div>
                                    <hr className="goods-card__hr" />
                                    <div className="goods-card__sum card-inner">
                                        <p>Sum:</p>
                                        <p>{elem.quantity * elem.price}</p>
                                    </div>
                                </div>

                            )
                        })
                        }
                    </div>

                </div>
            </div>
        </>

    )

}


export default withRouter(Order)