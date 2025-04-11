import { Suspense, useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
            const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            dispatch(userActions.setUserData(JSON.parse(userData)));
        }
    }, [dispatch]);
    return (
        <Suspense fallback="...Loading">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
}

export default App;
