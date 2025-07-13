import React from 'react';
import useRole from '../hooks/useRole';
import { useAuth } from '../hooks/useAuth';
import Loading from '../pages/shared/loading/Loading';

const MemberRoutes = ({children}) => {
     const {role,isPending,} = useRole()
    const {loading,user,userSignout} = useAuth()
    if(isPending || loading){
        return <Loading/>
    }

    if(!user || role !== "member"){
        userSignout()
    }

    return children;
};

export default MemberRoutes;