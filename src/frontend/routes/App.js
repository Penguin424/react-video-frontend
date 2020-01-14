import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage  from '../pages/HomePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from "../pages/RegisterPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";

import { Layout } from "../components/Layout.jsx";

const App = () =>(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export {App};