import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/head&foot/Navbar'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Home from './components/Home'
import Job from './Pages/Job'
import Browser from './Pages/Browser'
import Profile from './components/ui/Profile'
import Jobdescription from './components/ui/Jobdescription'
import Companies from './admin/Companies'
import CompanieCreate from './admin/CompanieCreate'
import CompanySetup from './admin/CompanySetup'
import AdminJobs from './admin/AdminJobs'
import Postjob from './admin/Postjob'

const appRouter= createBrowserRouter ([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Job/>
  },
  {
    path:"/description/:id",
    element:<Jobdescription/>
  },
  {
    path:"/browser",
    element:<Browser/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/admin/companies",
    element:<Companies/>
  },
  {
    path:"/admin/companies/create",
    element:<CompanieCreate/>
  }
  ,
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  }
  ,
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  }
  ,
  {
    path:"/adminpostjobs",
    element:<Postjob/>
  }
])
function App() {
  

  return (
    <>
     <RouterProvider router={appRouter}/>
        
    </>
  )
}

export default App
