import React from "react";
import "./ReviewCard.css";

function ReviewCard({ review }) {
    return (
        <div className="review-card">
            <img src={review.image} alt={review.name} className="review-image" />
            <h3 className="review-name">{review.name}</h3>
            <p className="review-comment">"{review.comment}"</p>
            <div className="review-rating">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
        </div>
    );
}

export default ReviewCard;
