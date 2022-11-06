import { format } from 'date-fns';
import getWeatherData from './weather';

const getCityName = (data) => data.name;
const getWeather = (data) => data.weather[0].main;
const getWeatherDescription = (data) => data.weather[0].description;
const getVisibility = (data) => (data.visibility / 1000).toFixed(2);
const getHumidity = (data) => data.main.humidity;
const getWindSpeed = (data) => (3.6 * data.wind.speed).toFixed(2);
const getWeatherIcon = (data) =>
  `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getTemperature = (data) => {
  const main = `${data.main.temp} ℃`;
  const feelsLike = `${data.main.feels_like} ℃`;
  return { main, feelsLike };
};

const getWeatherDetails = async (query) => {
  const data = await getWeatherData(query);
  if (data === -1) return 0;
  const city = getCityName(data);
  const weather = getWeather(data);
  const description = getWeatherDescription(data);
  const visibility = `${getVisibility(data)} km`;
  const humidity = `${getHumidity(data)} %`;
  const wind = `${getWindSpeed(data)} km/h`;
  const icon = getWeatherIcon(data);
  const temp = getTemperature(data);
  const time = format(new Date(), 'EEEE, h:mm a');
  return {
    city,
    weather,
    visibility,
    humidity,
    wind,
    icon,
    temp,
    description,
    time,
  };
};

const showWeather = async (query = 'New Delhi') => {
  const weatherDetails = await getWeatherDetails(query);
  if (weatherDetails) {
    const div = document.querySelector('.main');
    div.innerHTML = `<div class="weather-details"> 
        <div class="temp">${weatherDetails.temp.main}</div>
        <div class="wrapper">
          <div class="container">
            <div class="feels-like icon"><i class="fa-solid fa-temperature-three-quarters fa-xl"></i></div>
            <div class="feels-like">&nbsp;Feels Like<br/>${weatherDetails.temp.feelsLike}</div>
            <div class="visibility icon"><i class="fa-solid fa-eye-slash"></i></div>
            <div class="visibility">&nbsp;Visibility<br/>${weatherDetails.visibility}</div>
            <div class="humidity icon"><i class="fa-solid fa-droplet fa-lg"></i></div>
            <div class="humidity">&nbsp;Humidity<br/>${weatherDetails.humidity}</div>
            <div class="wind icon"><i class="fa-solid fa-wind"></i></div>
            <div class="wind">&nbsp;Wind Speed<br/>${weatherDetails.wind}</div>
          </div>
          <div class=city-details>
            <div class="city">${weatherDetails.city}</div>
            <div class="time">${weatherDetails.time}</div>
            <div class="weather"><img src="${weatherDetails.icon}"/></div>
            <div class="description">${weatherDetails.description}</div>
          </div>
        </div>
      </div>`;
  }
};

const getUserInput = (e) => {
  if (e.key === 'Enter') {
    const city = e.target.value;
    showWeather(city);
  }
};

window.addEventListener('load', showWeather());

export default getUserInput;
