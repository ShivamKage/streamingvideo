import React from "react";
import User_logo from "../Uttils/Pictures/User_logo.png";

const LiveComment = ({ name, comment }) => {
  return (
    <div className="flex items-center p-1">
      <img alt="User_logo" className="h-6 " src={User_logo}></img>
      <h1 className="font-semibold">{name} :</h1>
      <h1>{comment}</h1>
    </div>
  );
};

export default LiveComment;
