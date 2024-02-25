import { TermTagProps } from './constants';

const TermTag = ({
  term,
}: TermTagProps) => {
  return (
    <div>
      <p className="text-xs p-2 bg-term-tag-blue rounded-full">
        {term}
      </p>
    </div>
  );
}

export default TermTag;