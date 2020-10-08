import React,{useState} from 'react'
import { Header, CategoryListCard } from "../exporter";
import { withRouter } from 'react-router'
import './Likes.scss'

function Likes(props) {
    console.log(props.match.params.userId)
    const back = () => {
        props.history.goBack()
    }
    return (<>
        <Header />
        <div className="categorieslist__navigation">
            <p onClick={back} className="navigation__text"><i class="fas fa-chevron-left" />Back</p>
            <i class="fas fa-filter"></i>
        </div>
        <section className="likes-section">
            <CategoryListCard />
            <CategoryListCard />
            <CategoryListCard />
            <CategoryListCard />
            <CategoryListCard />


        </section>
    </>
    )


}


export default withRouter(Likes)