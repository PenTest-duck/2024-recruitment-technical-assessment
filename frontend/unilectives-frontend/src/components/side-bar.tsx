import logo from "../assets/unilectives.svg";
import {
  BookOpenIcon,
  ShieldCheckIcon,
  BarsArrowUpIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center h-screen px-6 py-8 bg-gray-50">
      <div>
        <img src={logo} className="w-6 h-6" alt="Unilectives Logo" />
        <hr className="h-px my-8 bg-gray-200 border-0" />
      </div>
    
      <div className="flex flex-col justify-between h-full">
        <div className="w-8">
          <BookOpenIcon />
          <ShieldCheckIcon className="mt-5" />
        </div>
        
        <div className="w-8">
          <BarsArrowUpIcon className="rotate-90" />
          <UserCircleIcon className="mt-5" />
          <MoonIcon className="mt-5" />
          <ArrowRightEndOnRectangleIcon className="mt-5" />
        </div>
      </div>
    </div>
  );
};
  
  export default SideBar;