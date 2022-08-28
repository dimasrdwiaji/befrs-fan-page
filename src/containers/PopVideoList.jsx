import axios from "axios";
import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";

function PopVideoList() {
  const [popVideos, setPopVideos] = useState([]);

  const baseURL = "https://youtube.googleapis.com/youtube/v3/search";

  const searchPop = `${baseURL}?key=${process.env.REACT_APP_API_YOUTUBE}&part=snippet&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=20&order=viewCount`;

  const fetchPopVideos = async () => {
    const checkLocalStorage = await JSON.parse(
      localStorage.getItem("popVideos")
    );

    if (checkLocalStorage === null) {
      try {
        const response = await axios.get(searchPop);
        const responseResult = response.data.items;
        console.log(responseResult);
        setPopVideos(responseResult);
        localStorage.setItem("popVideos", JSON.stringify(responseResult));
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setPopVideos(checkLocalStorage);
    }
  };

  useEffect(() => {
    fetchPopVideos();
  }, []);

  if (popVideos.length === 0) {
    return null;
  }

  return (
    <div className='m-8'>
      <VideoCard videos={popVideos} />
    </div>
  );
}

export default PopVideoList;
