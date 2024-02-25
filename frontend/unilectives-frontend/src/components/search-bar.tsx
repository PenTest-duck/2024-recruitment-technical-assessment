import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="flex items-center h-10 pl-4 border-solid border-2 border-search-border-blue rounded-md">
      <form className="flex flex-1">
        <MagnifyingGlassIcon className="w-6 mr-3 text-search-border-blue" />
        <input 
          type="text"
          placeholder="Search for a course e.g. COMP1511"
          className="flex-1 w-full h-10 px-2 bg-transparent placeholder:text-search-border-blue placeholder:font-medium"
        />
      </form>
    </div>
  );
}

export default SearchBar;