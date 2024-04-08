import React from 'react'

export default function SpeakerCard(props) {

    // console.log(props.data);
    const {name, lecture_title,description,image,yt_link} = props.data;
    return (
        <div className="col-lg-6 order-md-1 image-class">
            <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={image} className="img-fluid" alt="" />
                </div>
                <div className="text">
                    <h1>{name}</h1>
                    <h4>{lecture_title}</h4>
                    <p>{description}</p>

                    <button className="btn btn-lg main-btn"><a href={yt_link} target="_blank" rel="noopener noreferrer"> Watch Video</a></button>
                </div>
            </div>
        </div>
    )
}
