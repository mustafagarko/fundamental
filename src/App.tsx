import { Route, Routes } from "react-router-dom";
import "./styles/index.sass";

import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { AboutAsync } from "./pages/About/About.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <p>SOME FONT CHECKING TEXT </p>
            <button onClick={toggleTheme}>Switch Theme</button>
            <nav>
                <ul>
                    <Link to="/"> главная</Link>
                    <Link to="/about"> about</Link>
                </ul>
            </nav>
            <Suspense fallback={"...LOADING"}>
                <Routes>
                    <Route element={<MainPageAsync />} path="/" />
                    <Route element={<AboutAsync />} path="/about" />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
