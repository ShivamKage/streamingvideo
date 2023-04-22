import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  YOUTUBE_SEARCH_RESULT_LIST1,
  YOUTUBE_SEARCH_RESULT_LIST2,
} from "../Uttils/Consts";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  useEffect(() => {
    resultData();
  }, []);
  const resultData = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULT_LIST1 + params.data + YOUTUBE_SEARCH_RESULT_LIST2
    );
    const json = await data?.json();
    setDataResult(json.items);
    // console.log(json.items);
  };
  return !dataResult ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <h1>Result for- {params.data}</h1>
      {dataResult.map((item, index) => (
        <Link to={"/watch?v=" + item.id.videoId}>
          <div key={index}>
            <div className="flex m-1 p-2 w-full">
              <img
                className="rounded-xl w-96"
                alt="thumbnail"
                src={item.snippet.thumbnails.medium.url}
              ></img>
              <ul className="mx-1 p-1">
                <li className="font-semibold">{item.snippet.title}</li>
                <li className="font-semibold">{item.snippet.channelTitle}</li>
                <li className="text-sm">{item.snippet.description}</li>
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Result;
