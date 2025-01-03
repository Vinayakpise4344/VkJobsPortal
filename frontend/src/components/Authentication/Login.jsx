import React, { useEffect, useState } from "react";
import Navbar from "../head&foot/Navbar";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { User_api } from "@/Handler/port";
import { useDispatch, useSelector } from "react-redux";
import { SetLoading, setUser } from "@/redux/auth";
import { toast } from "sonner";



const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  
   const { user } = useSelector(store => store.auth);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {

    e.preventDefault();
    try {
        dispatch(SetLoading(true));
        const res = await axios.post(`${User_api}/login`, input, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });
        if (res.data.success) {
            dispatch(setUser(res.data.user));
            Navigate("/");
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data?.message);
    } finally {
        dispatch(SetLoading(false));
    }
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
        <form
          onSubmit={SubmitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2 grid grid-flow-row">
            <Label>Email</Label>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="ekxb"
            />
          </div>

          <div className="my-2 grid grid-flow-row">
            <label>Password</label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder=" dkwljnvlkwe "
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                Student
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="Recuriter"
                  checked={input.role === "Recuriter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                Recuriter
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full bg-blue-400 my-4">
            Login
          </Button>

          <span>
            Don't have an Account?{" "}
            <Link to="/signup">
              <span className="text-blue-700">Signup</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
