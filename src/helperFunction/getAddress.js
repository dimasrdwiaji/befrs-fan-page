import { readFileSync } from "fs";
import axios from "axios";

let jsonString;
let videoArray;

// Read uploaded videos json file

const file = "../assets/fetched_data/uploadedVideos.json";

const readFile = (filePath) => {
  try {
    jsonString = readFileSync(filePath, "utf-8");
    videoArray = JSON.parse(jsonString);
  } catch (error) {
    console.log(error);
  }
};

readFile(file);

// Split by address, filter only unique address

function uniqueAddress(value, index, self) {
  return self.indexOf(value) === index;
}

let obtainAddress = (array) =>
  array
    .map((item) =>
      item.snippet.description
        .split(/\r?\n/)
        .filter((l) => l.indexOf("ADDRESS:") === 0)
        .filter(uniqueAddress)
    )
    .map((l) => l.map((i) => i.replace("ADDRESS: ", "")));

let obtainedAddress = obtainAddress(videoArray);

// Assign address to object

const assignAddress = (obj) => {
  obj.map((element) =>
    Object.assign(element.snippet, {
      address: obtainedAddress[obj.indexOf(element)],
    })
  );
};

assignAddress(videoArray);

// Subset object to only relevant info to geocode

const subset = (obj) => {
  let newObj = {};
  newObj.videoId = obj.contentDetails.videoId;
  newObj.title = obj.snippet.title;
  newObj.thumbnail = Object.values(obj.snippet.thumbnails).pop();
  newObj.address = obj.address;
  newObj.coordinate = [];
  return newObj;
};

const videoMap = videoArray.map(subset);

console.log(videoMap[0]);

// Geocode

const geocode = async (obj) => {
  const baseURL = `http://api.positionstack.com/v1/forward`;

  const params = {
    // access_key: process.env.REACT_APP_API_POSITIONSTACK,
    access_key: process.env.REACT_APP_API_POSITIONSTACK,
    query: obj.address,
    limit: 1,
    output: "geojson",
    country_module: 0,
    sun_module: 0,
    timezone_module: 0,
    bbox_module: 0,
  };

  try {
    const fetchGeocode = axios.get(baseURL, { params });
    const geocodedData = fetchGeocode.data;
    obj.address.push(geocodedData);
  } catch (error) {
    console.log(error);
  }
};

// console.log(axios.get(`http://api.positionstack.com/v1/forward?acces_key=${process.env.REACT_APP_API_POSITIONSTACK}&query=jakarta`));

// videoMap.map(geocode);

console.log(process.env.REACT_APP_API_POSITIONSTACK);