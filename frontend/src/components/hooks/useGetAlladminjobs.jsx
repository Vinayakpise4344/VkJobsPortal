import { Job_api } from '@/Handler/port'
import { setallAdminJobs } from '@/redux/jobSlice'


import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAlladminjobs = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${Job_api}/getadminjobs`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setallAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminJobs();
    },[])
}

export default useGetAlladminjobs