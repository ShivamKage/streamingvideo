import React, { useRef, useState } from "react";

const Demo2 = () => {
  var a = 0;
  const [b, setB] = useState(0);
  const c = useRef(0);
  return (
    <div className="w-80 h-96 border flex flex-col border-black">
      <div>
        <button
          className="p-2 m-3 bg-green-200 rounded-md w-14"
          onClick={() => {
            a++;
            console.log("a:" + a);
          }}
        >
          +
        </button>
        <span className="ml-4 p-2">{a}</span>
      </div>
      <div>
        <button
          className="p-2 m-3 bg-green-200 rounded-md w-14"
          onClick={() => {
            setB((prev) => prev + 1);
            console.log("b:" + b);
          }}
        >
          +
        </button>
        <span className="ml-4 p-2">{b}</span>
      </div>
      <div>
        <button
          className="p-2 m-3 bg-green-200 rounded-md w-14"
          onClick={() => {
            c.current++;
            console.log("c:" + c.current);
          }}
        >
          +
        </button>
        <span className="ml-4 p-2">{c.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
