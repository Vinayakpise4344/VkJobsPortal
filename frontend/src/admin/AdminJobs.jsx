
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/components/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setsearchCompanyByText } from '@/redux/companySlice'
import AdminJobTable from './AdminJobTable'
import useGetAlladminjobs from '@/components/hooks/useGetAlladminjobs'
import Navbar from '@/components/head&foot/Navbar'


const AdminJobs = () => {
    useGetAlladminjobs();

  const [input, setInput] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setsearchCompanyByText(input))
  },[input])
  return (
    <div>
    <Navbar />
    <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
            <input
                className=" w-max border border-gray-400 text-black"
                placeholder="Filter by name"
                onChange={(e) => setInput(e.target.value)}
            />
            <Button  onClick={() => navigate("/adminpostjobs")}>Post New Jobs</Button>
           
        </div>
         <AdminJobTable/>
    </div>
</div>
  )
}

export default AdminJobs