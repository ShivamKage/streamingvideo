import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menu = useSelector((store) => store.menu.MenuIsOpen);
  if (!menu) return null;
  return (
    <div className="text-lg ml-2 px-2">
      <ul className="border-b w-40 p-2 m-1">
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">Shorts</li>
        <li className="p-2">Subscriptions</li>
        <li className="p-2">Originals</li>
        <li className="p-2">Youtube Music</li>
      </ul>
      <ul className="border-b p-2 m-1">
        <li className="p-2">Library</li>
        <li className="p-2">History</li>
        <li className="p-2">Watch later</li>
        <li className="p-2">Downloads</li>
        <li className="p-2">Liked videos</li>
      </ul>
      <ul className="border-b p-2 m-1">
        <li className="p-2">
          <Link to="/books">Books</Link>
        </li>
        <li className="p-2">
          <Link to="/demo">Demo</Link>
        </li>
        <li className="p-2">
          <Link to="/demo2">Demo2</Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
