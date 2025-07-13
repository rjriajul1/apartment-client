import React from 'react';
import useRole from '../hooks/useRole';
import { useAuth } from '../hooks/useAuth';
import Loading from '../pages/shared/loading/Loading';
import { Navigate } from 'react-router';

const AdminRoutes = ({children}) => {
    const {role,isPending,} = useRole()
    const {loading,user,userSignout} = useAuth()
    if(isPending || loading){
        return <Loading/>
    }

    if(!user || role !== "admin"){
        userSignout()
    }

    return children;



};

export default AdminRoutes;