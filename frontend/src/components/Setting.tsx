import { useSettingsStore } from "@/store/useSettings";
import { cn } from "@/util/cn";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface SettingProps {
    to: string;
    text: string;
    icon?: IconDefinition;
}

export default function Setting({ to, text, icon }: SettingProps) {
    const { openSetting } = useSettingsStore();

    return (
        <NavLink
            onClick={() => openSetting()}
            to={`/settings/${to}`}
            className={({ isActive }) =>
                cn(
                    // layout
                    "flex items-center gap-4 p-3 px-4",
                    // interactivity
                    "hover:bg-neutral-100 cursor-pointer",
                    // Edges
                    "rounded-lg",
                    isActive && "text-blue-600"
                )
            }
        >
            {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" />}
            {text}
        </NavLink>
    );
}