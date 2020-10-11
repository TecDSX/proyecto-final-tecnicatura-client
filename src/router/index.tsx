import React from 'react';
import { Router as ReactRouter, Route, browserHistory } from 'react-router';
import { Home, Dashboard } from '../pages';

export const Router = () => {
    return (
        <ReactRouter history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
        </ReactRouter>
    )
}
