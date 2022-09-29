import axios from "axios";

let geocodedData;

const geocode = async () => {
  const baseURL = `http://api.positionstack.com/v1/forward`;

  const params = {
    access_key: process.env.REACT_APP_API_POSITIONSTACK,
    // access_key: 'fcf85820c0a02c240658a5a71e4dd55d',
    query: "jakarta",
    limit: 1,
    country_module: 0,
    sun_module: 0,
    timezone_module: 0,
    bbox_module: 0,
  };

  try {
    const fetchGeocode = await axios.get(baseURL, { params });
    geocodedData = fetchGeocode.data;
    console.log(geocodedData);
  } catch (error) {
    console.log(error.message);
  }
};

export { geocode, geocodedData };

// axios
//   .get("https://api.positionstack.com/v1/forward", { params })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log(geocode());