import React from 'react'
import LatestCard from './LatestCard';
import { useSelector } from 'react-redux';
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Latest = () => {
  const {allJobs} = useSelector(store=>store.job)
  return (
    <div className='mt-30
     ml-20'>
    <h1 className='text-4xl font-bold'><span className='text-[#2925f8]'>Latest & Top </span> Job Openings</h1>
    <div className='grid grid-cols-3 gap-4 my-5'>
         {
         allJobs.length <=0 ? <span>No Job Available</span>: allJobs?.slice(0-6).map((job)=> <LatestCard key={job._id} job={job}/>) // allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
        } 
    </div>
</div>
  )
}

export default Latest