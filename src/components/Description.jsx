import React from "react";
import { Card } from "flowbite-react";

export default function Description({ desc }) {
  return (
    <div className="my-8">
      <Card
        horizontal={true}
        imgSrc={desc[0].snippet.thumbnails.high.url}
        imgAlt={desc[0].snippet.title}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {desc[0].snippet.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {desc[0].snippet.description}
        </p>
      </Card>
    </div>
  );
}
