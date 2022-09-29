const fs = require("fs");

let jsonString;
let videoArray;

try {
  jsonString = fs.readFileSync(
    "../assets/fetched_data/uploadedVideos.json",
    "utf-8"
  );
  videoArray = JSON.parse(jsonString);
} catch (error) {
  console.log(error);
}

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

videoArray.map((video) => (
  Object.assign(video.snippet, {address: obtainedAddress[videoArray.indexOf(video)]})
))

export const videoList = videoArray;