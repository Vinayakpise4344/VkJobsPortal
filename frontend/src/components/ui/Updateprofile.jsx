import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { DialogContent, DialogFooter, DialogHeader } from "./dialog";
import { Label } from "@radix-ui/react-label";

import Input_ from "postcss/lib/input";
import { Loader2 } from "lucide-react";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { User_api } from "@/Handler/port";
import { setUser } from "@/redux/auth";
import { toast } from "sonner";

const Updateprofile = ({ open, setopen }) => {
  const [loading , setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth || { user: null });
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.file;
    setInput({ ...input, file })
}


  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
   
   
    
    try{
       const res = await axios.post(`${User_api}/profile/update`,formData,{
            headers:{

                'Content-Type':'multipart/form-data'
            },
            withCredentials:true
            
       }
    );
    console.log('Profile updated:', res.data)
       if(res.data.sucess){
        dispatch(setUser(res.data.user))
        toast.success(res.data.message)
       }
    }catch(error){
        console.log(error)
        
    }
    setopen(false)

    console.log(input);
}
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setopen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}  method="POST">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <input
                  id="number"
                  name="number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              
             
            </div>
            <DialogFooter>{
            loading?<Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
}
</DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Updateprofile;
