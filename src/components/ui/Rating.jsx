/* eslint-disable react/prop-types */

export default function Rating({ rating }) {
  if (!rating && rating !== 0) return null;

  return (
    <div className="rating rating-xs rating-half">
      <div
        className="mask mask-star mask-half-1"
        aria-label=".5 star"
        aria-current={rating === 0.5}
      ></div>
      <div
        className="mask mask-star mask-half-2"
        aria-label="1 star"
        aria-current={rating === 1}
      ></div>
      <div
        className="mask mask-star mask-half-1"
        aria-label="1.5 star"
        aria-current={rating === 1.5}
      ></div>
      <div
        className="mask mask-star mask-half-2"
        aria-label="2 star"
        aria-current={rating === 2}
      ></div>
      <div
        className="mask mask-star mask-half-1"
        aria-label="2.5 star"
        aria-current={rating === 2.5}
      ></div>
      <div
        className="mask mask-star mask-half-2"
        aria-label="3 star"
        aria-current={rating === 3}
      ></div>
      <div
        className="mask mask-star mask-half-1"
        aria-label="3.5 star"
        aria-current={rating === 3.5}
      ></div>
      <div
        className="mask mask-star mask-half-2"
        aria-label="4 star"
        aria-current={rating === 4}
      ></div>
      <div
        className="mask mask-star mask-half-1"
        aria-label="4.5 star"
        aria-current={rating === 4.5}
      ></div>
      <div
        className="mask mask-star mask-half-2"
        aria-label="5 star"
        aria-current={rating === 5}
      ></div>
    </div>
  );
}
