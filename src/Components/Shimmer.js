import React from "react";

const Shimmer = () => {
  const arr = [];
  for(var i=0;i<16;i++){
    arr.push(i)
  }
  return (
    <div className="flex flex-wrap">
      {arr.map((i)=> <div key={i} className="pt-3 mt-6 mx-3 w-72 h-64 bg-gray-100"></div>
      )}
    </div>
  );
};

export default Shimmer;
