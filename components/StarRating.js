import React from 'react';
const StarRating = ({ rating }) => {
    // محدود کردن امتیاز بین 1 تا 5
    const clampedRating = Math.min(Math.max(parseFloat(rating), 1), 5);
    
    // تبدیل امتیاز به سطح ستاره
    const starLevel = Math.round(clampedRating);
    
    // ایجاد ستاره‌ها بر اساس سطح
    const stars = '★'.repeat(starLevel) + '☆'.repeat(5 - starLevel);
    
    return (
        <div className="star-rating">
            {stars}
        </div>
    );
};
export default StarRating;
