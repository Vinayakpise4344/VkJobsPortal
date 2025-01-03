import React from "react";
import Navbar from "../head&foot/Navbar";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User_api } from "@/Handler/port";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetLoading } from "@/redux/auth";



const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
});
const dispatch = useDispatch()
const {loading,user} = useSelector(store=>store.auth);

const Navigate = useNavigate();
const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
}
const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
}
const SubmitHandler = async(e)=>{
  e.preventDefault()
  const formData = new FormData();
  formData.append("fullname",input.fullname)
  formData.append("email",input.email)
  formData.append("phoneNumber",input.phoneNumber)
  formData.append("password",input.password)
  formData.append("role",input.role)
  if(input.file){
    formData.append("file",input.file)
  }
  try{
    dispatch(SetLoading(true));
   const res = await axios.post(`${User_api}/register`,formData,{
    headers:{ "Content-Type":"multipart/form-data" },
    withCredentials:true,
   });
   if(res.data.success){
    Navigate("/login");
    alert("You have successfully signed up")
    toast.success(res.data.message);
   }
     
  }catch(error){
    console.error('Error response:', error.response?.data || error.message);
     toast.error(error.response.data.message);
  }finally{
    dispatch(SetLoading(false));
}
  console.log(formData)
  useEffect(()=>{
    if(user){
        Navigate("/");
    }
},[])
}

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-5xl mx-auto">
        <form onSubmit={SubmitHandler}
          
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">SignUP</h1>
          <div className="my-2 grid grid-flow-row">
            <Label>Full Name</Label>
            <input
              className=" border border-x-4xl border-black"
              type="text"
              value={input.fullname}
              name='fullname'
              onChange={changeEventHandler}
              placeholder=""
            />
          </div>
          <div className="my-2 grid grid-flow-row">
            <Label>Email</Label>
            <input type="email" 
             value={input.email}
             name='email'
             onChange={changeEventHandler}
             placeholder="ekxb" />
          </div>
          <div className="my-2 grid grid-flow-row">
            <Label>Phone Number</Label>
            <input type="text" 
             value={input.phoneNumber}
             name='phoneNumber'
             onChange={changeEventHandler}placeholder="" />
          </div>
          <div className="my-2 grid grid-flow-row">
            <label>Password</label>
            <input type="password"  
            value={input.password}
              name='password'
              onChange={changeEventHandler}
              placeholder=" dkwljnvlkwe " />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className="flex items-center gap-4 my-4">
              <div className="flex items-center space-x-2">
                <input type="radio"
                name="role"
                value="Student"
                checked={input.role === 'Student'}
                onChange={changeEventHandler}
                className="cursor-pointer"/>Student
              </div>
              <div className="flex items-center space-x-2">
              <input type="radio"
                name="role"
                value="Recuriter"
                checked={input.role === 'Recuriter'}
                onChange={changeEventHandler}
                className="cursor-pointer"/>Recuriter
              </div>
              
            </RadioGroup>
            
          </div>
          

          <Button type="submit" className="w-full bg-blue-400 my-4">Signup</Button>
          
          <span>Already have an Account? <Link to="/login"><span className="text-blue-700">Login</span></Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
