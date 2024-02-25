import { CourseCardProps } from './constants';
import StarRating from './star-rating';
import TermTag from './term-tag';

const CourseCard = ({
  prefix,
  code,
  title,
  averageStars,
  totalReviews,
  offeredTerms,
}: CourseCardProps) => {
  return (
    <div className="flex flex-col justify-between w-auto h-56 p-5 shadow-lg rounded-xl">
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">
            {prefix}{code}
          </h2>
          <div>
            <StarRating rating={averageStars} />
            <p className="float-left font-medium text-gray-500">
              {totalReviews} reviews
            </p>
          </div>
        </div>
        <p className="mt-2">
          {title}
        </p>
      </div>
      <div className="flex gap-x-1">
        {offeredTerms.map((term) => (
          <TermTag term={term} />
        ))}
      </div>
    </div>
  );
}

export default CourseCard;