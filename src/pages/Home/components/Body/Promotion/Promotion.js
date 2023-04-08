import React from "react";
import Data from "../../../../../data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Promotion.css";
import CountdownTimer from "../../../../../components/CountdownTimer";

export default function Promotion() {
    const productList = Data.product.slice(0, 8);

    const settings = {
        // dots: true,
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: true,
        centerPadding: "20px",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className=" m-pri-marginTop">
            <h2 className="text-3xl text-center sm:text-lg">
                Deals Of The Month
            </h2>
            <p className="text-lg text-center py-2 mb-10 sm:text-base">
                Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque
                libero
            </p>
            <Slider {...settings}>
                {productList.map((product) => {
                    return (
                        <div className="">
                            <div className="grid grid-cols-2 aspect-[7/3] m-pri-marginX promotion-container shadow-lg rounded-lg">
                                <div>
                                    <img
                                        className="w-[90%] h-[100%] mx-auto my-auto object-cover"
                                        src={product.image[0]}
                                    ></img>
                                </div>
                                <div className="flex flex-col my-5 justify-between">
                                    <a>Music instrument name</a>
                                    <div className="text-sm">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className="text-lg">
                                        <span className="font-medium">
                                            3.000.000
                                        </span>
                                        <span className="ml-5 font-medium text-sm text-gray-500 line-through">
                                            4.000.000
                                        </span>
                                    </div>

                                    
                                    <p>
                                        <strong className="text-red-600">
                                            Hurry up!
                                        </strong>{" "}
                                        Ofter ends in
                                    </p>
                                    <CountdownTimer targetDate={new Date('2023-04-10T00:00:00')}/>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
