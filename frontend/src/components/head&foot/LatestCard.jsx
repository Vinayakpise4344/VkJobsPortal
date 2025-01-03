import { Badge } from "@/components/ui/badge"

import React from "react";

const LatestCard = ({job}) => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
      <div>
        <h1>{job?.company?.name}</h1>
        <p>india</p>
      </div>
      <div>
        <h1>{job?.title}</h1>
        <p>
         {job?.description}
        </p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge
          className={"text-blue-700 font-bold  text-1xl"}
          variant="ghost">
          {job?.position}
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
        {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
        {job?.salary}
        </Badge>
      </div>
    </div>
  );
};

export default LatestCard;
