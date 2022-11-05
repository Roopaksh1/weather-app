const API_KEY = 'bc22c4384ba5494cab6a1cc0b6b0837d';

const getWeatherData = async (city = 'New Delhi') => {
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      { mode: 'cors' }
    );

    const data = await result.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

export default getWeatherData;
