import React, {Component} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Recommendations() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500
      };
    return(
        <section className="section" id="recommendations">
        <h1 className="recommendations">Recommendations</h1>
            <div style={{
                margin: "2em"
            }}>
            <Slider {...settings}>
                {reviews.map((d) =>(
                    <div className="card" style={{border: "1px solid red"}}>
                    <div className="card-image"style={{backgroundColor: "yellow"}}>
                        <img src={d.img} alt="" />
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{d.name}</p>
                        <p className="subtitle is-6">{d.data}</p>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    )
}

const reviews = [
    {
        name: 'user1',
        img: 'logo.png',
        data: 'Hello world! this is a great guy'
    },
    {
        name: 'user2',
        img: 'logo.png',
        data: 'Hello world! this is a great guy'
    },
    {
        name: 'user3',
        img: 'logo.png',
        data: 'Hello world! this is a great guy'
    },
    {
        name: 'user4',
        img: 'logo.png',
        data: 'Hello world! this is a great guy'
    }
]