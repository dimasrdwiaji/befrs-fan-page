import axios from "axios";

let geocodedData;

const geocode = async () => {
    const baseURL = `https://api.positionstack.com/v1/forward`;

    const params = {
        access_key: process.env.REACT_APP_API_POSITIONSTACK,
        query: '',
        limit: 1,
        output: 'geojson',
        country_module: 0,
        sun_module: 0,
        timezone_module: 0,
        bbox_module: 0,
    }

    try {
        const fetchGeocode = axios.get(baseURL, {params});
        geocodedData = fetchGeocode.data;
    } catch (error) {
        console.log(error);
    }
}

export {geocode, geocodedData};