import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" pt-3 mt-6 mx-3 w-72">
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url}></img>
      <ul>
      <li className="font-semibold">{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
