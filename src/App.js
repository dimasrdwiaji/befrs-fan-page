import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./containers/About";
import Home from "./containers/Home";
import VideoList from "./containers/VideoList";
import VideoPage from "./containers/VideoPage";

function App() {
  return (
    <div className="dark dark:bg-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
