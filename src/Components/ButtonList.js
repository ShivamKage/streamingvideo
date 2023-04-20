import React from "react";

const ButtonList = () => {
  const btnNames = [
    "All",
    "Live",
    "Music",
    "Comedy",
    "Sports",
    "Arijit Singh",
    "All",
    "Live",
    "Music",
    "Comedy",
    "Sports",
    "Arijit Singh",
  ];
  return (
    <div>
      {btnNames.map((name, index) => (
        <button
          key={index}
          className="bg-gray-200 rounded-lg px-4 py-1 ml-2 text-base"
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
