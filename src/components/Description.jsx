import React from "react";

export default function Description({ desc }) {
  return (
    <div className="my-8 flex flex-col justify-center w-screen">
      <h1>About Us</h1>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {desc[0].snippet.description}
      </p>
      <figure>
        <img
          src={desc[0].snippet.thumbnails.high.url}
          alt={desc[0].snippet.title}
        />
      </figure>
    </div>
  );
}
