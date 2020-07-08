import React from 'react'
import './Stars.css';
import { Link } from 'gatsby';

export default function Stars({rating}) {
    // total number of stars
    const starTotal = 5;
    rating = rating ? rating : (Math.random() * (5 - 1)).toPrecision(2);
    const starPercentage = (rating / starTotal) * 100;
    return (
        <div className="d-flex">
            <div className="stars-outer">
                <div className="stars-inner" style={{ width: `${(Math.round(starPercentage / 10) * 10)}%`}}></div>
            </div>
            <span className="total_reviews">
                <Link to="/">({Math.floor(Math.random() * (10 + 1)) + 1})</Link>
            </span>
        </div>
    )
}
