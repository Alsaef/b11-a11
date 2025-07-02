

import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const axiosInstance = axios.create({
    baseURL: 'https://server-11-helpy.vercel.app' 
})

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;