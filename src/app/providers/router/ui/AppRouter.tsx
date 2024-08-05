import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { createFactory, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={"...LOADING"}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map((route) => (
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
