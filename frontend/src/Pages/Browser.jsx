import Navbar from '@/components/head&foot/Navbar';
import React from 'react'
import Job from './Job';
import Jobs from './JOBpagcont/Jobs';

const randomJobs = [1,2,3,4];

const Browser = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
        <h1>Search Results ({randomJobs.length})</h1>
       
<div className='grid grid-cols-3 gap-4'>       {
          randomJobs.map((item,index)=>{
            return(
              <Jobs/>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Browser