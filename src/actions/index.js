import axios from 'axios';

const API_KEY = 'cd2ab57b12e8c77e72ed0f472088c53e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; // This is to keep our action types consistent between our action creators and reducers

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
