import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useAuth } from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const {data:role,isPending,isError,refetch} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/user/${user?.email}`)
            return data?.role
        }
    })
    return {role,isPending,isError,refetch}

   
};

export default useRole;