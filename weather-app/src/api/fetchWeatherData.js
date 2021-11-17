import { fetch } from '../shared/fetch';
const API_KEY = process.env.REACT_APP_API_KEY;
const CURRENT_WEATHER_URL = process.env.REACT_APP_CURRENT_WEATHER_URL;
const WEEKLY_WEATHER_URL = process.env.REACT_APP_WEEKLY_WEATHER_URL;
const LANGUAGE = process.env.REACT_APP_LANGUAGE;
const UNITS = process.env.REACT_APP_UNITS;

export const useWeatherDataRepository = (zipCode, cityCode) => {
  const query = `?${
    zipCode ? `zip=${zipCode},jp` : `id=${cityCode}`
  }&appid=${API_KEY}&lang=${LANGUAGE}&units=${UNITS}`;

  const getCurrentApiUrl = `${CURRENT_WEATHER_URL}${query}`;
  const getWeeklyApiUrl = `${WEEKLY_WEATHER_URL}${query}`;
  const fetchCurrentData = async () => {
    const res = await fetch(getCurrentApiUrl);
    return res;
  };

  const fetchWeeklyData = async () => {
    const res = await fetch(getWeeklyApiUrl);
    return res;
  };

  return { fetchCurrentData, fetchWeeklyData };
};
