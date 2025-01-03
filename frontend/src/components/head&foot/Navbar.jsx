import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, Store, User, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import store from "@/redux/store";
import { setUser } from "@/redux/auth";
import { toast } from "sonner";
import axios from "axios";
import { User_api } from "@/Handler/port";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  // const  user  = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async()=>{
    try{
      const res = await axios.get(`${User_api}/logout`,
        {withCredentials:true});

      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.success)
        
      }
    }catch(error){
      console.log(error)
      
    }
  }
  
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-4xl font-bold">
            Vk<span className="text-blue-600 font-bold">Jobs</span>
          </h1>
        </div>
        <div className="flex items-center gap-7 ">
        <ul className='flex font-medium items-center gap-5'>
                        {
                            user && user.role === 'Recuriter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Job</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/browser">Browse</Link></li>
                                </>
                            )
                        }


                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>

                                    <Avatar className="cursor-pointer w-9">
                                        <AvatarImage src={'data:image/jpeg;base64,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'} 
                                        alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div >
                                        <div className='flex gap-2 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage  alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>{user?.fullname}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600'>
                                            {
                                                 user.role === 'Student' && (
                                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                        <User2 /> 
                                                        <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                                    </div>
                                                )
                                            }

                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                            
                        )
                    }

                </div>
            </div>

        </div>
  );
};

export default Navbar;
