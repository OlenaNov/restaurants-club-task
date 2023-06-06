import { Suspense } from "react";
import { Main } from "./Layout.module"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Main>
            <Suspense fallback="LOADING.....">
                <Outlet />
            </Suspense>
        </Main>
    )
};

export default Layout;