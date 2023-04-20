import React from "react";

const BooksCard = ({ cardData }) => {
  return (
    <div className="bg-gray-100 m-5 p-3  rounded-lg shadow-md w-64">
      <h1 className="font-bold w-8 h-8 bg-white p-1 rounded-full">{cardData.id}</h1>
      <h1 className="text-lg font-semibold">{cardData.title}</h1>
      <h1>{cardData.body}</h1>
    </div>
  );
};

export default BooksCard;
