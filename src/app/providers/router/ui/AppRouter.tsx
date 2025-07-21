import { getUserAuthData } from 'entities/User';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = Object.values(routeConfig).filter((route) => !route.requiresAuth || isAuth);
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                <Routes>
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};
