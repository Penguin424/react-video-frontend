import React from 'react';

import Header from "./Header.jsx.js";
import { Footer } from "./Footer.jsx.js";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export {Layout};