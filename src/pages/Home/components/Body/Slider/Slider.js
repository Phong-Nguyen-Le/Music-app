import data from "../../../../../data/data.json";
import "./Slider.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderPromotion() {
    const DataImages = data.resources;
    console.log(DataImages)
    const settings = {
        dots: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:8000,
        autoplay: true,
        pauseOnHover:false,
        pauseOnFocus:true,
        centerPadding: '20px' ,
        className: "transition-opacity",
        easing: 'ease',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                dots: false,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: false,
                arrows: false
              }
            }
          ]
        
    };
    return (
        <>
        <Slider {...settings}>
            {DataImages.map((image) => (
                <div key={image} className="">
                    <img className="w-full h-[600px] object-cover sm:h-[250px]" src={image.imageUrl} alt="" />
                </div>
            ))}

        </Slider>
        </>
    );

}
