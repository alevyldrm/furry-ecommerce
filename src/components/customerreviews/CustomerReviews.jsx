import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/autoplay";
import reviews from "../../data/review";
import ReviewCard from "./ReviewCard";
import './CustomerReviews.css';

function CustomerReviews() {
    return (
        <section className="customer-reviews">
            <h2 className="section-title">Customer Reviews</h2>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                navigation={true}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default CustomerReviews;
