import fullStar from "../../assets/full-star.png";
import halfStar from "../../assets/half-star.png";
import emptyStar from "../../assets/empty-star.png";

import "./Rating.css";

function Rating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(fullStar);
    } else if (rating >= i - 0.5) {
      stars.push(halfStar);
    } else {
      stars.push(emptyStar);
    }
  }

  return (
    <div className="rating-stars">
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" />
      ))}
    </div>
  );
}

export default Rating;
