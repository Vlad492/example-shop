import React, { useState } from 'react'
import { Header } from '../exporter'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './CategoryList.scss'
import CategoryListCard from '../CategoryListCard/CategoryListCard'

function GoodsList(props) {
    console.log(props)
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const like = () => {
        console.log('liked')
    }
    const back = () => {
        props.history.goBack()
    }

    return (
        <>
            <Header />
            <div className="goods__navigation">
                <p onClick={back} className="navigation__text"><i class="fas fa-chevron-left"/>Back</p>
                <i class="fas fa-filter"></i>
            </div>
            <h3 className ="goodslist__title">All in {props.match.params.name} category</h3>
            
            <section className="categorieslist__section">

                {list.map((elem, index) => {
                    return <CategoryListCard index = {index}/>
                })}
            </section>
        </>
    )
}
export default withRouter(GoodsList)