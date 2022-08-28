import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "flowbite-react";

function VideoPlayer() {
  let params = useParams();

  const [snippet, setSnippet] = useState([]);

  const baseURL = `https://www.googleapis.com/youtube/v3/videos`;

  const videoId = params?.videoId;

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `${baseURL}?part=snippet&id=${videoId}&key=${process.env.REACT_APP_API_YOUTUBE}`
        );
        const responseResult = response.data.items;
        setSnippet(responseResult);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideo();
  }, [videoId]);

  if (snippet[0] === undefined) {
    return null;
  }

  return (
    <div className="flex items-center">
      <div className="my-4 md:w-1/2 md:ml-[25vw]">
        <Card className="w-full">
          <iframe
            width='100%'
            height="480"
            src={`https://www.youtube.com/embed/${snippet[0].id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {snippet[0].snippet.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 fetchedText">
            {snippet[0].snippet.description}
          </p>
        </Card>
      </div>
    </div>
  );
}

export default VideoPlayer;
