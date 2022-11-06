const API_KEY = 'bc22c4384ba5494cab6a1cc0b6b0837d';

const getWeatherData = async (city) => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    { mode: 'cors' }
  );
  const data = await result.json();
  if (data.cod === '404') {
    alert(data.message);
    return -1;
  }
  return data;
};

export default getWeatherData;
