import React from "react";
import User_logo from "../Uttils/Pictures/User_logo.png";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm my-2 bg-gray-100">
      <img alt="User_logo" className="w-12 p-1" src={User_logo}></img>
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
