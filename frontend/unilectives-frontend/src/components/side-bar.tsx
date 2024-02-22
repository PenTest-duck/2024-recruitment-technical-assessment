import logo from "assets/unilectives.svg";
import {
    BookOpenIcon,
    ShieldCheckIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    UserCircleIcon,
    MoonIcon,
    ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
    return (
        <div className="side-bar">
            <img src={logo} className="logo" alt="Unilectives Logo" />
        </div>
    );
}

export default { SideBar };