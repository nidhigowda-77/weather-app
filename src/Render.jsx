import axios from "axios";
import { useEffect, useState } from "react";

export default function Render(data) {
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "e896baa4459ed19160996595317a386e";

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [data.city]);

  return (
    <div className="border-4 mt-10 bg-yellow-100 border-blue-200">
      {weatherData && (
        <div>
          <p className="text-black">City: {weatherData.name}</p>
          <p className="text-black">Temperature: {weatherData.main.temp} K</p>
          <p className="text-black">Description: {weatherData.weather[0].description}</p>
          <p className="text-black">Country :{weatherData.sys.country}</p>
        </div>
      )}
    </div>
  );
}
