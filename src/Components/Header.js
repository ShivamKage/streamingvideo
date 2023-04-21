import React, { useEffect, useState } from "react";
import Burger_Menu from "../Uttils/Pictures/Burger_Menu.png";
import Youtube_logo from "../Uttils/Pictures/Youtube_logo.png";
import User_logo from "../Uttils/Pictures/User_logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogle } from "../Uttils/MenuSlice";
import { YOUTUBE_SEARCH_API } from "../Uttils/Consts";
import { addCache } from "../Uttils/SearchSlice";

function Header() {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { data } = useSelector((store) => store.search);
  const HandelSideBar = () => {
    dispatch(toogle());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (data[searchQuery]) {
        setSuggestions(data[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(addCache({ [searchQuery]: json[1] }));
  };
  return (
    <div className="grid grid-flow-col px-4 pt-3">
      <div className="flex col-span-3 ">
        <img
          onClick={HandelSideBar}
          alt="Menu"
          className="cursor-pointer h-9 p-2"
          src={Burger_Menu}
        ></img>
        <Link to="/">
          <img
            alt="Youtube_logo"
            className="h-9 ml-4 p-2"
            src={Youtube_logo}
          ></img>
        </Link>
      </div>
      <div className="col-span-8">
        <div>
          <input
            className="w-3/5 pl-4 text-sm h-9 border shadow-inner border-gray-200 rounded-l-full"
            type="text"
            placeholder="Search"
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-gray-100 w-16 rounded-r-full h-9">🔎︎</button>
        </div>
        {!showSearch ? null : (
          <div className="fixed py-1 px-2 bg-white border shadow-lg rounded-xl w-[35rem]">
            <ul>
              {suggestions.length !== 0 &&
                suggestions.map((data, index) => (
                  <li
                    className="px-2 py-1 hover:bg-gray-100"
                    key={index}
                    onClick={() => (console.log("Side pressed"))}
                  >
                    🔎︎ {data}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-">
        <img alt="User_logo" className="h-9 " src={User_logo}></img>
      </div>
    </div>
  );
}

export default Header;
