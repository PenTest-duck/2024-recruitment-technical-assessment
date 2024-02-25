import { ChevronDownIcon } from '@heroicons/react/20/solid';

const SortFilter = () => {
  return (
    <div className="flex items-center h-10 w-1/6 border-solid border-2 border-gray-300 rounded-lg">
      <div className="flex justify-between px-3 w-full">
        <p className="text-gray-400">Sort by</p>
        <ChevronDownIcon className="w-6 justify-end" />
      </div>
    </div>
  );
}

export default SortFilter;