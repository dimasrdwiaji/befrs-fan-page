import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function HeroSection() {
  const [defaultVideo, setDefaultVideo] = useState();

  const baseURL = "https://youtube.googleapis.com/youtube/v3/videos";

  const fetchDefaultVideo = async () => {
    try {
      const response = await axios.get(
        `${baseURL}?part=snippet&id=${process.env.REACT_APP_DEFAULT_VIDEO_ID}&maxResults=1&key=${process.env.REACT_APP_API_YOUTUBE}`
      );
      const responseResult = response.data.items[0];
      setDefaultVideo(responseResult);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchDefaultVideo();
  }, []);

  if (defaultVideo === undefined) {
    return null;
  }

  return (
    <section className="relative">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={defaultVideo.snippet.thumbnails.maxres.url}
        alt={defaultVideo.snippet.title}
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-gray-900 sm:to-transparent"></div>

      <NavBar />

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-sky-50">
            Culinary adventure
            <strong className="font-extrabold text-emerald-400 sm:block">
              Jam-packed with flavor
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-sky-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-sky-50 text-sm font-medium rounded shadow bg-emerald-400 sm:w-auto active:bg-emerald-400 inactive:text-sky-50 hover:bg-sky-50 hover:text-emerald-400 focus:outline-none focus:ring"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full px-12 py-3 text-sky-50 text-sm font-medium rounded shadow bg-emerald-400 sm:w-auto active:bg-emerald-400 hover:bg-sky-50 hover:text-emerald-400 focus:outline-none focus:ring"
              href="/about"
            >
              Discover Culinary
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
