import React from "react";

const Skeleton = () => {
  return (
    <div className=" flex w-9/12 mb-6 flex-col">
      <div className="flex gap-3">
        <div className="w-10/12 bg-gray-300 h-9 mb-5 animate-pulse "></div>
        <div className=" w-2/12  bg-gray-300 h-9 mb-5 animate-pulse "></div>
      </div>
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>{" "}
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>{" "}
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>{" "}
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>{" "}
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>{" "}
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>{" "}
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>{" "}
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>
      <div className="block w-full  bg-gray-300 h-12 animate-pulse mb-1"></div>
    </div>
  );
};

export default Skeleton;
