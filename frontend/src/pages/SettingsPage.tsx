// Route
import { Routes, Route } from "react-router-dom";

// Layout
import SettingsSideMenu from "@/layout/sidemenus/Settings.Sidemenu";
import ProfileSettings from "@/layout/settings/ProfileSettings";
import SecuritySettings from "@/layout/settings/PrivacySettings";

// Store
import { useMobileStore } from "@/store/useMobileStore";
import { useSettingsStore } from "@/store/useSettings";

// Utils
import { cn } from "@/util/cn";
import AuthanticationSettings from "@/layout/settings/AuthanticationSettings";
import GroupsSettings from "@/layout/settings/GroupsSettings";
import { useEffect } from "react";

export default function SettingsPage() {
    const { isOnMobile } = useMobileStore()
    const { isSettingsOpen, closeSetting } = useSettingsStore()

    useEffect(() => {
        closeSetting()
    }, [closeSetting]) // on mount

    const content = (
        <Routes>
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/auth" element={<AuthanticationSettings />} />
            <Route path="/privacy" element={<SecuritySettings />} />
            <Route path="/groups" element={<GroupsSettings />} />
        </Routes>
    )

    return (
        <div className={cn(
            // Layout
            "h-full flex",
        )}>
            {/* SideMenu */}
            {/* Will always show on desktop */}
            {/* Will show if chat is closed on mobile */}
            {!isOnMobile ? <SettingsSideMenu /> : !isSettingsOpen && <SettingsSideMenu />}

            {/* Chat */}
            {/* Will always show on desktop */}
            {/* Will show if chat is open on mobile */}
            {!isOnMobile ?
                content :
                isSettingsOpen &&
                content
            }
        </div>
    )
}