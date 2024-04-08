import React from 'react'
import "./team.css"
import TeammateCard from './TeammateCard'
import TeammateData from './TeammateData'
import Footer from '../../components/Footer/Footer'
import Carousel from 'react-bootstrap/Carousel'
import Team_carousel from './Team_carousel'


export default function TeamMain() {
    return (
        <>
            <section id="team">
                {/* <div className="title">
                    <h1 className='text-center'>Team 2023-24 </h1>
                </div> */}
                <Carousel fade>
                    {Team_carousel.map((image, index) => (
                        <Carousel.Item key={index} interval={2000}>
                            <img src={image} alt={`Carousel Image ${index + 1}`} className="carousel-image" />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="container">
                    <div className="row">
                        {TeammateData.map((e) => <TeammateCard data={e} key={e.id} />)}
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}
