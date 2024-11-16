// Components

// Layout
import Setting from "@/components/Setting";
import GeneralSideMenu from "@/layout/GeneralSideMenu";
import { faLock, faShield, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function SettingsSideMenu() {
    return (
        <GeneralSideMenu>
            <div className="min-h-16 h-16 px-6 bg-white flex items-center border-b border-neutral-200">
                <h1 className="text-2xl font-bold text-neutral-600">Settings</h1>
            </div>
            <div className="flex py-2 flex-col gap-2 px-2 overflow-y-auto scrollbar">
                <Setting icon={faUser} to="profile" text="Profile" />
                <Setting icon={faShield} to="auth" text="Authantication" />
                <Setting icon={faLock} to="privacy" text="Privacy" />
                <Setting icon={faUserGroup} to="groups" text="Groups" />
            </div>
        </GeneralSideMenu>
    )
}