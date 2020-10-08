import React, { useState } from 'react'
import { Header } from '../exporter'
import { Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import './CategoriesList.scss'
import {CategoryCard} from '../exporter'

function GoodsList(props) {
    console.log()
    const like = () => {
        console.log('liked')
    }
    const back = () => {
        props.history.goBack()
    }
    const [list, setList] = useState(["Monitors","Notebooks","Smartphones","Books","Processors","Coffee"])

    return (
        <>
            <Header />
            <div className="categorieslist__navigation">
                <p onClick={back} className="navigation__text"><i class="fas fa-chevron-left"/>Back</p>
                <i class="fas fa-filter"></i>
            </div>
            <h3>All categories</h3>
            <section className="categorieslist__section">
                {list.map((elem, index) => {
                    return (
                       <CategoryCard index = {index+1} key = {index} name = {elem}/>
                    )
                })}
            </section>
        </>
    )
}
export default withRouter(GoodsList)