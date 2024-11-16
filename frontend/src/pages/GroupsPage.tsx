// Layout
import GroupsSideMenu from "@/layout/sidemenus/Groups.Sidemenu";

// Route
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

// Layout
import Chat from "@/layout/Chat";

// Store
import { useChatStore } from "@/store/useChatStore";
import { useMobileStore } from "@/store/useMobileStore";

// Utils
import { cn } from "@/util/cn";
import { useEffect } from "react";

export default function GroupsPage() {
    const { isOnMobile } = useMobileStore()
    const { isChatOpen, resetChatStore } = useChatStore()
    
    useEffect(() => {
        resetChatStore()
    }, [resetChatStore])

    return (
        <div className={cn(
            // Layout
            "h-full flex",
        )}>
            {/* SideMenu */}
            {/* Will always show on desktop */}
            {/* Will show if chat is closed on mobile */}
            {!isOnMobile ? <GroupsSideMenu /> : !isChatOpen && <GroupsSideMenu />}

            {/* Chat */}
            {/* Will always show on desktop */}
            {/* Will show if chat is open on mobile */}
            {!isOnMobile ? 
                <Routes>
                    <Route path="/" element={<div className="w-full h-full flex items-center justify-center"> Click on a conversation to start chatting </div>} />
                    <Route path="/:id" element={<Chat />} />
                </Routes> :
                isChatOpen &&
                <Routes>
                    <Route path="/:id" element={<Chat />} />
                </Routes>
            }
        </div>
    )
}