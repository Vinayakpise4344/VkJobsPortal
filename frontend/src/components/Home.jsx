import React, { useEffect } from 'react'
import Navbar from './head&foot/Navbar'
import Category from './head&foot/Category'
import Latest from './head&foot/Latest'
import Section from './head&foot/Section'
import Footer from './head&foot/Footer'
import useGetAllJobs from './hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const navigate = useNavigate();
  const {user} = useSelector(store=>store.auth);
   useEffect(() => {
    if(user?.role ==='Recuriter'){
      navigate("/admin/companies")
    }
  
   
  }, []);
  
  
  return (
    <div className=''>
        <Navbar/>
        <Section/>
        <Category/>
        <Latest/>
         <Footer/>  
        
    </div>
  )
}

export default Home