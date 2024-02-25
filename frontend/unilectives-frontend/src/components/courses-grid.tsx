import CourseCard from './course-card';
import courses from '../assets/courses.json'; 
import { Term } from './constants';

const CoursesGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {courses.map((course) => (
        <CourseCard 
          prefix={course.course_prefix}
          code={course.course_code}
          title={course.course_title}
          averageStars={course.average_stars}
          totalReviews={course.total_reviews}
          offeredTerms={course.offered_terms as unknown as Term[]} // cast to unknown only because we are given a file of valid JSON 
        />
      ))}
    </div>
  )
}

export default CoursesGrid;