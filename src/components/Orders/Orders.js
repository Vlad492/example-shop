import React from 'react'
import { withRouter } from 'react-router';
import { Header } from "../exporter";
import './Orders.scss'
import {OrderCard} from '../exporter'

function Orders(props) {
    console.log(props)
    const orders = [
        {id : 12312315, orderStatus:'Confirmed', date:'14.08.2020 14:15',billingStatus: 'Paid', amount:'26550 UAH',img : ['https://via.placeholder.com/100x100','https://via.placeholder.com/100x100','https://via.placeholder.com/100x100'] },
        {id : 12312115, orderStatus:'Handling', date:'14.08.2020 14:15',billingStatus: 'Paid', amount:'26550 UAH',img : ['https://via.placeholder.com/100x100','https://via.placeholder.com/100x100','https://via.placeholder.com/100x100'] },
        {id : 12112315, orderStatus:'Rejected', date:'14.08.2020 14:15',billingStatus: 'Returned', amount:'26550 UAH',img : ['https://via.placeholder.com/100x100','https://via.placeholder.com/100x100','https://via.placeholder.com/100x100'] },
        {id : 12345315, orderStatus:'Confirmed', date:'14.08.2020 14:15',billingStatus: 'Paid', amount:'26550 UAH',img : ['https://via.placeholder.com/100x100','https://via.placeholder.com/100x100'] }
    ]
    const back = () => {
        props.history.goBack()
    }
    return (
        <>
            <Header />
            <div className="categorieslist__navigation">
                <p onClick={back} className="navigation__text"><i class="fas fa-chevron-left"/>Back</p>
                <i class="fas fa-filter"></i>
            </div>
            <div className="orderslist__section">
                <h3 className="orderslist__text">Your orders</h3>
                {orders.map((elem,index)=>{
                     return <OrderCard info = {elem} key = {index}/>
                })}
               
            </div>
        </>
    )
}
export default withRouter(Orders)