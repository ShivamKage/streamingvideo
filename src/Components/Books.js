import React, { useEffect, useState } from "react";
import BooksCard from "./BooksCard";
import Shimmer from "./Shimmer";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getBooks();
  }, [page]);

  const getBooks = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=12&_page=" + page
    );
    const json = await data?.json();
    setTimeout(() => {
      setBooks((data) => [...data, ...json]);
      setLoading(false);
    }, 200);
  };
  const handelScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((page) => page + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return books.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-wrap">
        {books.map((book) => (
          <BooksCard key={book.id} cardData={book} />
        ))}
      </div>
      {loading && <h1 className="text-xl m-2 p-2  font-bold">Loading....</h1>}
    </div>
  );
};

export default Books;
