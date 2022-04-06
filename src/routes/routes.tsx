import React, { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {

    const { authenticated } = useContext(AuthContext);

    if (authenticated) {
        return (<AppRoutes></AppRoutes>);
    }

    return (<AuthRoutes></AuthRoutes>);
}

export default Routes;