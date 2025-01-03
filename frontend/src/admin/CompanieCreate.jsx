import Navbar from '@/components/head&foot/Navbar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { company_api } from '@/Handler/port'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'

const CompanieCreate = () => {
    const navigate = useNavigate();
    const [companyName,setcompanyName] = useState()
const  registernewcompany = async ()=>{
    try{
       const res = await axios.post(`${company_api}/register`,{companyName},{
        headers:{
            "Content-Type":'application/json'
        },
        withCredentials:true
       })
       if(res?.data?.success){
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/Companies/${companyId}`)
       }
    }catch(error){
        console.log(error)
    }
}

  return (
    <div>
    <Navbar />
    <div className='max-w-4xl mx-auto'>
        <div className='my-10'>
            <h1 className='font-bold text-2xl'>Your Company Name</h1>
            <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
        </div>

        <Label>Company Name</Label>
        <input
            type="text"
            className="my-2 m-5"
            placeholder="JobHunt, Microsoft etc."
             onChange={(e) => setcompanyName(e.target.value)}
        />
        <div className='flex items-center gap-2 my-10'>
            <Button variant="outline" onClick={() => navigate("/admin/Companies")}>Cancel</Button>
            <Button onClick={registernewcompany}>Continue</Button>
        </div>
    </div>
</div>
  )
}

export default CompanieCreate