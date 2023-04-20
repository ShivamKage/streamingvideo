import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { open } from "../Uttils/MenuSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(open());
  }, []);
  return (
    <div className="px-1 mx-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
