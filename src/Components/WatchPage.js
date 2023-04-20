import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { close } from "../Uttils/MenuSlice";
import CommentContainer from "./CommentContainer";
import LiveSection from "./LiveSection";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(close());
  }, []);
  const [parms] = useSearchParams();
  return (
    <div className="p-2 w-full mt-9">
      <div className="flex w-full">
        <iframe
          className="ml-5"
          width="1030"
          height="579"
          src={"https://www.youtube.com/embed/" + parms.get("v")}
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="px-1 w-96 mx-1">
          <LiveSection />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
