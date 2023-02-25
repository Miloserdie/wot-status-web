import React from 'react';
import {Navigate} from "react-router-dom";
import {checkAuth} from "../../utils/checkAuth";

type ProtectedRouteProps = {
    children: JSX.Element
}

const ProtectedRoute = ({children}:ProtectedRouteProps): JSX.Element => {
    const isUserAuth = checkAuth();

    if(!isUserAuth) {
        localStorage.clear();
        return <Navigate to={'/signIn'}/>
    }

    return children

};

export default ProtectedRoute;