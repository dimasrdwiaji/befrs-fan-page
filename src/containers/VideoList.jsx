import axios from "axios";
import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";

function VideoList() {
  const [videoList, setvideoList] = useState([]);
  const [pageToken, setPageToken] = useState("");

  const baseURL = `https://youtube.googleapis.com/youtube/v3/activities?part=snippet`;
  const maxResults = `maxResults=20`;
  const channelId = `channelId=${process.env.REACT_APP_CHANNEL_ID}`;
  const apiKey = `key=${process.env.REACT_APP_API_YOUTUBE}`;
  const nextPage = `${pageToken}`;
  const request = `${baseURL}&${channelId}&${apiKey}&${nextPage}&${maxResults}`;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        console.log(request);
        const response = await axios.get(request);
        const responseResult = response.data;
        setvideoList(responseResult.items);
        setPageToken(`pageToken=${responseResult.nextPageToken}`);
        console.log(responseResult.nextPageToken);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos();
  }, [pageToken]);

  if (videoList.length === 0) {
    return null
  }

  return (
    <div className="m-8">
        <VideoCard videos={videoList} />
    </div>
  );
}

export default VideoList;
