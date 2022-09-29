import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom'

function VideoCard({ videos }) {
  let navigate = useNavigate();

  if (videos === undefined) {
    return null;
  }

  const handleClick = (video) => {
    console.log(video);
    navigate(`/video/${video.id.videoId}`)
  }

  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {videos.map((video) => (
        <Card
          imgSrc={video.snippet.thumbnails.medium.url}
          imgAlt={video.snippet.title}
          key={video.id.videoId}
          onClick={() => handleClick(video)}
        >
          <h5
            className="text-l font-bold tracking-tight text-gray-900 dark:text-white"
            dangerouslySetInnerHTML={{ __html: video.snippet.title }}
          ></h5>
        </Card>
      ))}
    </main>
  );
}

export default VideoCard;
