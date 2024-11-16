// Utilities
import { cn } from "@/util/cn";

// Assets
import logo from "@/assets/logo.png"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome, faMessage, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function SideNavbar() {

    return (
        <div 
            className={cn(
                // Layout
                "w-32 min-w-32 h-full flex z-50",
                // Spacing
                "py-2 md:py-8",
                // Coloring
                "bg-white",
                // Border
                "border-t md:border-r border-neutral-200",
                // Responsive
                "flex-row md:flex-col w-full md:w-32 h-16 min-h-16 md:h-full px-4 md:px-0"
            )}
        >
            <Link to="/" className="hidden md:flex flex-col justify-center items-center">
                <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
            </Link>
            <div className="w-full flex-grow md:mt-8">
                <ul className={cn(
                    // Layout
                    "h-full mx-auto flex flex-col gap-16 md:gap-8 justify-center",
                    // Responsive
                    "flex-row md:flex-col items-center w-full md:w-fit"
                )}>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({isActive}) => cn(
                                "flex items-center justify-center gap-4 hover:text-blue-600",
                                isActive && "text-blue-600"
                            )} 
                            title="Home"
                        >
                            <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/messages" 
                            className={({isActive}) => cn(
                                "flex items-center justify-center gap-4 hover:text-blue-600",
                                isActive && "text-blue-600"
                            )} 
                            title="Messages"
                        >
                            <FontAwesomeIcon icon={faMessage} className="w-5 h-5" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/groups" 
                            className={({isActive}) => cn(
                                "flex items-center justify-center gap-4 hover:text-blue-600",
                                isActive && "text-blue-600"
                            )} 
                            title="Groups"
                        >
                            <FontAwesomeIcon icon={faUsers} className="w-6 h-6" />
                        </NavLink>
                    </li>
                    <li className="md:mt-auto">
                        <NavLink 
                            to="/settings/profile" 
                            className={({isActive}) => cn(
                                "flex items-center justify-center gap-4 hover:text-blue-600",
                                isActive && "text-blue-600"
                            )} 
                            title="Settings"
                        >
                            <FontAwesomeIcon icon={faGear} className="w-6 h-6" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}