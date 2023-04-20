import React, { useEffect, useState } from "react";
import LiveComment from "./LiveComment";
import { generateComment, generateName } from "../Uttils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Uttils/chatSlice";

const LiveSection = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.messages);
  const [myComment, setMyComment] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      const name = generateName();
      const comment = generateComment(25);
      dispatch(addMessage({ name: name, comment: comment }));
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div>
      <div className="bg-gray-100 h-[542px] flex flex-col-reverse overflow-y-scroll border border-black">
        {message.map((message, i) => (
          <LiveComment key={i} name={message.name} comment={message.comment} />
        ))}
      </div>
      <form
        className="mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          setMyComment("");
        }}
      >
        <input
          className="border border-black w-60"
          value={myComment}
          onChange={(e) => setMyComment(e.target.value)}
        ></input>
        <button
          className="bg-green-200 mx-1 p-1 rounded-md"
          onClick={() =>
            dispatch(addMessage({ name: "Shivam Garg", comment: myComment }))
          }
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveSection;
