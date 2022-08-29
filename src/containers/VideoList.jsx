import axios from "axios";
import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";

function VideoList() {
  const [videoList, setvideoList] = useState([]);
  const [pageToken, setPageToken] = useState("");

  const baseURL = `https://youtube.googleapis.com/youtube/v3/activities?part=snippet`;
  const maxResults = `maxResults=20`;
  const channelId = `channelId=${process.env.REACT_APP_CHANNEL_ID}`;
  const apiKey = `key=${process.env.REACT_APP_API_YOUTUBE}`;
  const request = `${baseURL}&${channelId}&${apiKey}&${maxResults}${pageToken}`;

  const fetchVideos = async () => {
    try {
      const response = await axios.get(request);
      const responseResult = response.data;
      setvideoList(responseResult.items)
      setPageToken(`&pageToken=${responseResult.nextPageToken}`);
      console.log(pageToken);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (videoList.length === 0) {
    return null;
  }

  return (
    <>
      <NavBar />
      <main className="m-8">
        <VideoCard videos={videoList} className="mb-2" />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
          onClick={fetchVideos}
        >
          More Videos
        </button>
      </main>
      <SiteFooter />
    </>
  );
}

export default VideoList;
