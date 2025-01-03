import Navbar from "@/components/head&foot/Navbar";
import React, { useEffect, useState } from "react";
import Filtercard from "./JOBpagcont/Filtercard";
import Jobs from "./JOBpagcont/Jobs";
import { useSelector } from "react-redux";

const jobss = [1, 2, 3, 4, 5, 6, 7, 8];
const Job = () => {
  const {allJobs,searchedQuery} = useSelector(store =>store.job);  
   const [filterJobs,setFilterJobs] = useState(allJobs)
   useEffect(() => {
    if (searchedQuery) {
        const filteredJobs = allJobs.filter((job) => {
            return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        })
        setFilterJobs(filteredJobs)
    } else {
        setFilterJobs(allJobs)
    }
}, [allJobs, searchedQuery]);
  
   return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex">
          <div className="w-30% pl-7 pr-7 border border-grey-100 ">
            <Filtercard />
          </div>
         {
            filterJobs.length < 0? <span>Job not found</span> :(
                <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                    <div className="grid grid-cols-3 gap-4">
                  {   
                   allJobs.map((job) => ( 
                   <div key={job?._id}>
                    <Jobs job={job}/>
                   </div>
                   ))
                  }
          

        </div>
      </div>
            )
        }
        </div>
        </div>

    </div>
  );
};

export default Job;
