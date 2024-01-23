import React, {Component} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Recommendations() {
    const settings = {
        // className: "center",
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3, 
        dots: true,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };
    return(
        <section className="section" id="recommendations">
        <h1 className="recommendations">Recommendations</h1>
            <div style={{
                margin: "2em"
            }}>
            <Slider {...settings}>
                {reviews.map((d) =>(
                    <div key ={d.id} className="card">
                    <div className="title is-6 card-body">{d.data}</div>
                    <div className="media-content" style={{textAlign: "center"}}>
                    <figure className="image is-64x64">
                        <img className="is-rounded" src={d.img}></img>
                    </figure>   
                        <p className="subtitle is-6">{d.name}</p>
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
        id:1,
        name: 'Adrian S.',
        img: ' https://media.licdn.com/dms/image/D5635AQH9S4LFoLD0QQ/profile-framedphoto-shrink_200_200/0/1705786397672?e=1706634000&v=beta&t=hRrL2ydWBIEA23_nW61KePhV3UqVSS2NEvZ5_KhEmTk',
        data: "I can attest to his fast learning abilities. He consistently demonstrated a deep understanding of the program's content and was always eager to explore new concepts by bringing up his enthusiasm towards getting to new material..."
    },
    {
        id:2,
        name: 'Zach B.',
        img: 'https://media.licdn.com/dms/image/D5603AQFbLHa7MCYxXg/profile-displayphoto-shrink_200_200/0/1692365546634?e=1711584000&v=beta&t=ILg_gB3iVzNJXKZLK0qnDy5WmBgKRG5Miz7U6lXWuRY',
        data: 'Dave is a great leader that possesses strong communication skills, empathy, and the ability to inspire and motivate others. He leads by example and sets the standard for his Soldiers.'
    },
    {
        id:3,
        name: 'Rogue & Monty',
        img: 'dogs.jpg',
        data: 'He is the best dad we could ever ask for. He gives us all of the treats and we get to go on amazing hikes in Colorado.'
    },
]