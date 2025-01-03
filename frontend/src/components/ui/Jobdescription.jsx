import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { Badge } from './badge';
import { useParams } from 'react-router-dom';
import useGetSingle from '../hooks/useGetSingle';
import axios from 'axios';
import { setSingle } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { application_api, Job_api } from '@/Handler/port';


const Jobdescription = () => {
    const isApplied = true;
    const params = useParams();
    const jobId = params.id;
    const {singleJob} = useSelector(store=>store.job)
    const{user} = useSelector(store=>store.auth)
    const dispatch = useDispatch();
    // const[isApllied,setApplied]=useState(initiallyApplied);
    const isApllied = singleJob?.application?.some(application=>application.applicant === user?.id)||false;


    const applyJobHandler = async()=>{
        try{
            const res = await axios.get(`${application_api}/apply/${jobId}`,);
            if(res.data.success){
              toast.success(res.data.message)
            }
        }catch(error){
            console.log(error)
            toast.error(error.response.data.message);
        }
    }
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
        
        },[jobId,dispatch,user?._id]);
  return (
    <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-blue-700 font-bold'} variant="ghost"> {singleJob?.position}</Badge>
                        <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary}</Badge>
                    </div>
                </div>
                <Button
                   onClick ={isApllied ?null : applyJobHandler

                   }
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience}</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>4</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>21-5-2024</span></h1>
            </div>
    </div>
  )
}

export default Jobdescription