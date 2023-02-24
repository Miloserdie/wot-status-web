import React from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

type ProtectedRouteProps = {
    children: JSX.Element
}

const ProtectedRoute = ({children}:ProtectedRouteProps): JSX.Element => {
    const isUserAuth = useAuth();

    if(!isUserAuth) {
        localStorage.clear();
        return <Navigate to={'/signIn'}/>
    }

    return children

};

export default ProtectedRoute;