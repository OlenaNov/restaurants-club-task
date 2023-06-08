import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Main from "../Main/Main";

const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <Suspense fallback="LOADING.....">
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
};

export default Layout;