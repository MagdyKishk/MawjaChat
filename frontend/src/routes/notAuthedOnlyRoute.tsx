// ProtectedRoute.tsx
import { useAuthStore } from '@/store/useAuthStore';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const NotAuthedOnlyRoute: React.FC = () => {
    const { isAuthenticated, checkedAuth } = useAuthStore();
    const location = useLocation()
    if (isAuthenticated && checkedAuth) {
        if (['/login', '/signup'].includes(location.pathname)) {
            return <Navigate to="/" replace />
        }
    }
    return <Outlet />;
};

export default NotAuthedOnlyRoute;
