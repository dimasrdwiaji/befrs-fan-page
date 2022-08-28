import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom'

function VideoCard({ videos }) {
  let navigate = useNavigate();

  if (videos === undefined) {
    return null;
  }

  const handleClick = (videoId) => {
    navigate(`/video/${videoId}`)
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {videos.map((video) => (
        <Card
          imgSrc={video.snippet.thumbnails.medium.url}
          imgAlt={video.snippet.title}
          key={video.id.videoId}
          onClick={() => handleClick(video.id.videoId)}
        >
          <h5
            className="text-l font-bold tracking-tight text-gray-900 dark:text-white"
            dangerouslySetInnerHTML={{ __html: video.snippet.title }}
          ></h5>
        </Card>
      ))}
    </div>
  );
}

export default VideoCard;
