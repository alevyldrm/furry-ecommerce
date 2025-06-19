import React from "react";
import "./HeroBanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";


import slide1 from '../../assets/images/slide1.jpg';
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";

const slides = [
    {
        image: slide1,
        title: "Trendy Looks",
        subtitle: "Give them a fresh look",
        button: "Shop Now",
    },
    {
        image: slide2,
        title: "Cozy for Your Pets",
        subtitle: "Soft and lovely outfits",
        button: "Shop Now",
    },
    {
        image: slide3,
        title: "Premium Quality",
        subtitle: "Designed with care",
        button: "Shop Now",
    },
    {
        image: slide4,
        title: "Stylish and Comfy",
        subtitle: "Explore the latest trends",
        button: "Shop Now",
    },
];

function HeroBanner() {
    return (
        <div className="hero-banner">
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={true}
                autoplay={{ delay: 4000 }}
                loop={true}
                spaceBetween={0}
                slidesPerView={1} >

                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide"
                            style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="slide-content">
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                                <button>{slide.button}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroBanner;