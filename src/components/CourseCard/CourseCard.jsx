import "./CourseCard.css";
import Rating from "../Rating/Rating";

function CourseCard({
  image,
  title,
  description,
  mentorImage,
  mentor,
  job,
  company,
  rating,
  totalReview,
  price,
}) {
  return (
    <article className="course-card">
      <div className="courseHeader">
        <img src={image} alt={title} className="course-image" />
        <div className="courseTitleMentor">
          <h3>{title}</h3>
          <p className="course-description">{description}</p>

          <div className="courseMentor">
            <img src={mentorImage} alt={mentor} />
            <div className="mentorInfo">
              <h4>{mentor}</h4>
              <p>
                {job}{" "}
                <span className="company">
                  di <span className="bold">{company}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="course-footer">
        <div className="rating">
          <Rating rating={rating} />
          <span>
            {rating} ({totalReview})
          </span>
        </div>
        <h3 className="price">Rp {price}K</h3>
      </div>
    </article>
  );
}

export default CourseCard;
