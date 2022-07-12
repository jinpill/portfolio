import { Fragment } from "react";

import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";

const Layout = (props: {
    children: React.ReactNode
}) => (
    <Fragment>
        <Header />
        <Contents>
            {props.children}
        </Contents>
        <Footer />
    </Fragment>
);

export default Layout;