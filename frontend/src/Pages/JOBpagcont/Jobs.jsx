import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Bookmark } from "lucide-react";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Jobs = ({job}) => {
  const navigate = useNavigate();
  const jobId = "lsekdhjgdsnfvsdkjf";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p>2 days ago</p>
        <Button
          variant="outline"
          className="rounded-full hover:bg-red-600"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>
      <div className="flex">
        <Button
          className="p-1 rounded-full gap-3 my-1"
          variant="outline"
          size="icon"
        >
          <Avatar>
            <AvatarImage src="data:image/jpeg;base64,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" />
          </Avatar>
        </Button>
        <div className>
          <h1>{job?.comapany?.name}</h1>
          <p>India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
         {job?.description}
        </p>
      </div>
      <div>
        <Badge className={"text-blue-700 font-bold  "} variant="ghost">
          {job?.position}
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}
        </Badge>
      </div>
      <div>
        <Button
          onClick={() => navigate(`/description/${job?._Id}`)}
          className="ml-2 mt-3 p-4 w-15 h-6 bg-blue-500 text-white"
          variant="outline"
        >
          Details
        </Button>

        <Button className="ml-2 mt-3 p-4 w-15 h-6">Save</Button>
      </div>
    </div>
  );
};

export default Jobs;
