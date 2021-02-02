import PropTypes from "prop-types";

function Reviews({ reviews }) {
  return (
    <>
      {reviews.length === 0 ? (
        <h3>No reviews</h3>
      ) : (
        <ul>
          {reviews.map((el) => {
            return (
              <li key={el.id}>
                <h3>Author: {el.author}</h3>
                <span>{el.content}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
