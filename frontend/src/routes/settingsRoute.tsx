// // ProtectedRoute.tsx
// import React from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';

// const SETTINGS_REGEX = /^\/settings(\/|$)/;

// const SettingsRoute: React.FC = () => {
//     const location = useLocation();
    
//     // Check if the location path matches the /settings pattern
//     if (SETTINGS_REGEX.test(location.pathname)) {
//         return <Navigate to="/settings/profile" replace />;
//     }
    
//     return <Outlet />;
// };

// export default SettingsRoute;
