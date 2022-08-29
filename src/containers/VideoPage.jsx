import React from "react";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import VideoPlayer from "../components/VideoPlayer";

function VideoPage() {

  return (
    <>
      <NavBar />
      <VideoPlayer />
      <SiteFooter />
    </>
  );
}

export default VideoPage;
