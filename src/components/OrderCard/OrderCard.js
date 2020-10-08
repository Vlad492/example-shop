import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { User } from "../../contexts";

export default function OrderCard(props) {
    let userid = useContext(User).userInfo.id

    console.log(props)
    return (
        <Link to={{pathname: `/orders/${userid}/${props.info.id}`}} className="orderslist__card">
            <div className="orderslist__card--header">
    <h5 className="orderslist__card--header-text">Order №{props.info.id}</h5>
                <h5 className="orderslist__card--header-text">14.08.2020 14:45</h5>
            </div>
            <div className="orderslist__card--progress">
                {(props.info.orderStatus === 'Confirmed')?(<p className='text-success'>Confirmed</p>):(props.info.orderStatus === "Handling")?(<p className='text-warning'>Handling</p>):<p className='text-danger'>Rejected</p>}
            </div>
            <div className="orderslist__card--contains">
                {props.info.img.map((elem, index)=>{
                   return <img src={elem} key = {index} className="orderslist__card--contains-img" />
                })}
            </div>
            <div className="orderslist__card--footer">
                <div className="orderslist__card--footer-status">
                    <p className="orderslist__card--footer-statustext">Status: </p>
                    {(props.info.billingStatus === 'Paid')?(<p className="orderslist__card--footer-statusvalue text-success">Paid</p>):(<p className="orderslist__card--footer-statusvalue text-danger">Returned</p>)}
                </div>
                <div className="orderslist__card--footer-amount">
                    <p className="orderslist__card--footer-amounttext">Amount: </p><p className="orderslist__card--footer-amountvalue">26550 UAH</p>
                </div>

            </div>

        </Link>
    )
}