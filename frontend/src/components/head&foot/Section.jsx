import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import imagee from './images.jpeg'
const Section = () => {
  return (
    <div className='text-center'> 
      <div className=" flex flex-col my-24 ">
        <h1 className="text-6xl font-semibold">
          Welcome To VK<span className="text-blue-700 font-bold ">Jobs</span>
        </h1>
        <p className="text-4xl ml-10">
          Where Your Dream Job<span className="font-bold ml-2">Awaits!</span>
        </p>
        <p className="mt-4 ml-5 align-text-bottom">
          Lorem ipsum dolor sit, amet onsectetur adipisicing elit. ventore,
          <br />c totam officia consequuntur qui sit quae eligendi corrupti.
          Nemo, rem.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-300 pl-8 rounded-full items-center gap-4 mt-7 mx-auto">
          <input
            type="text"
            placeholder="Find your dream job"
            className="outline-none border-none  w-full"
          />
          <Button className="rounded-r-full  bg-blue-600">
            <Search className="h-9 w-9 " />
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default Section;
