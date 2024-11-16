// Routing
import { Routes, Route, useLocation } from 'react-router-dom'
import NotAuthedOnlyRoute from '@/routes/notAuthedOnlyRoute'
import AuthedOnlyRoute from '@/routes/authOnlyRoute'

// Pages
import SignupPage from '@/pages/SignupPage'
import LoginPage from '@/pages/LoginPage'
import HomePage from '@/pages/HomePage'
import MessagesPage from '@/pages/Messages'

// Utils
import { cn } from '@/util/cn'
import SideNavbar from '@/layout/SideNavbar'
import { useChatStore } from './store/useChatStore'
import { useMobileStore } from './store/useMobileStore'
import { useEffect } from 'react'
import SettingsPage from './pages/SettingsPage'
import GroupsPage from './pages/GroupsPage'

// Store

const MobileBreakpoint = 768

const ChatPathRegex = /(^\/messages(\/|$)||^\/groups(\/|$))/;

function App() {
    const {isChatOpen} = useChatStore()
    const { isOnMobile, setIsOnMobile } = useMobileStore()
    const location = useLocation().pathname

    useEffect(() => {
        setIsOnMobile(window.innerWidth < MobileBreakpoint)
        window.addEventListener("resize", () => {
            setIsOnMobile(window.innerWidth < MobileBreakpoint)
        })
        return () => {
            window.removeEventListener("resize", () => {})
        }
    }, [setIsOnMobile])

    return (
        <div className={cn(
            // Layout
            "w-full h-screen flex",
            // Coloring
            "bg-pattern text-neutral-600"
        )}>
            <Routes>
            {/* Protected Routes for Authenticated Users */}
                <Route element={<AuthedOnlyRoute />}>
                    <Route
                        path="/*"
                        element={
                            <div className={cn(
                                // Layout
                                "w-full h-full flex",
                                // Responsive
                                "flex-col-reverse md:flex-row"
                                )}
                            >
                                {/* SideNavbar */}
                                {/* Will always show on desktop */}
                                {/* Will show if chat is closed on mobile */}
                                {!isOnMobile ? <SideNavbar /> : ChatPathRegex.test(location) ? !isChatOpen && <SideNavbar />: <SideNavbar /> }

                                <div className={cn(
                                    // Layout
                                    "h-[calc(100vh-4rem)] md:h-full w-full",
                                    isChatOpen && "h-full",
                                    // Responsive
                                    "flex-col-reverse md:flex-row"
                                )}>
                                    <Routes>
                                        <Route path="/" element={<HomePage />} />
                                        <Route path="/messages/*" element={<MessagesPage />} />
                                        <Route path="/groups/*" element={<GroupsPage />} />
                                        <Route path="/settings/*" element={<SettingsPage />} />
                                    </Routes>
                                </div>
                            </div>
                        }
                    />
                </Route>
        
                {/* Routes for Non-Authenticated Users */}
                <Route element={<NotAuthedOnlyRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App
