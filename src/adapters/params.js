const BASE_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const PARAMS = `&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_API_KEY}`
const urls = [];

const geoLocation = {
    "london": {"lat": 51.509865, "lon": -0.118092},
    "valencia": {"lat": 39.466667, "lon":  -0.375000},
    "providence": {"lat": 41.825226, "lon": -71.418884}
};


for (const v of Object.values(geoLocation)) {
    const url = `${BASE_URL}lat=${v.lat}&lon=${v.lon}${PARAMS}`
    urls.push(url);
  }

const [londonUrl, valenciaUrl, providenceUrl] = urls;
const charts = ["Humidity (g/m3)", "Temperature (°C)", "Wind Speed (mph)", "Wind Direction (°)"];

// Default dummy values
const humidityPoints = [ 20, 21, 23, 41, 17 ];
const temperaturePoints = [21.26, 22.13, 20.07, 29.95, 20.52 ];
const windSpeedPoints = [6.38, 2.5, 2.86, 2.99, 4.24];
const windDirectionPoints = [3, 8, 155, 163, 167];


export {
    londonUrl,
    valenciaUrl,
    providenceUrl,
    charts,
    humidityPoints,
    temperaturePoints,
    windSpeedPoints,
    windDirectionPoints,
 };
