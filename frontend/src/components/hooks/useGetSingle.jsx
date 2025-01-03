import { Job_api } from '@/Handler/port';
import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetSingle = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${Job_api}/get${jobId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingle(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
        
        },[])
}

export default useGetSingle