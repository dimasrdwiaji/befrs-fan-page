import axios from "axios";
import React, { useState, useEffect } from "react";
import Description from "../components/Description";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";

function About() {
  const [about, setAbout] = useState([]);

  const baseURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${process.env.REACT_APP_CHANNEL_ID}&key=${process.env.REACT_APP_API_YOUTUBE}`;

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const result = await axios.get(baseURL);
        const responseResult = result.data.items;
        setAbout(responseResult);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAbout();
  }, [baseURL]);

  if (about[0] === undefined) {
    return null;
  }

  return (
    <div>
      <NavBar />
      <Description desc={about} />
      <SiteFooter />
    </div>
  );
}

export default About;
