import { StarRatingProps } from './constants';

const StarRating = ({
  rating,
}: StarRatingProps) => {
  const roundedRating = Math.round(rating);
  let stars = [];

  // Populate filled stars
  for (let i = 0; i < roundedRating; i++) {
    stars.push(<p className="text-3xl text-star-purple">★</p>);
  }
  
  // Populate unfilled stars
  for (let i = 0; i < (5 - roundedRating); i++) {
    stars.push(<p className="text-3xl text-gray-300">★</p>);
  }

  return (
    <div className="flex">
      {stars}
    </div>
  );
}

export default StarRating;