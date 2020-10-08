import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { Header, Carousel, Card } from '../exporter'
import './home.scss'



class Home extends React.Component {
    constructor(){
        super();
    }


    render() {
        return (
            <>
                <Header />
                <main>
                    <section className="home__firstsection">
                        <Carousel />
                    </section>

                    <section className="column">
                        <h4>NEw arrivals</h4>
                        <div className="column__cards">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>

                    </section>
                    <section className="column">
                        <h4>Categories</h4>
                        <div className="column__cards">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>

                    </section>


                </main>
            </>
        )
    }
}


export default Home