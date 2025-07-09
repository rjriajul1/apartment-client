import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Loading from '../pages/shared/loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {loading,user} = useAuth()
    const location = useLocation()
    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoutes;