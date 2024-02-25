export enum Term {
  "Summer",
  "Term 1",
  "Term 2",
  "Term 3",
}

export type CourseCardProps = {
  prefix: String,
  code: number,
  title: String,
  averageStars: number,
  totalReviews: number,
  offeredTerms: Term[],
}

export type StarRatingProps = {
  rating: number,
}

export type TermTagProps = {
  term: Term,
}