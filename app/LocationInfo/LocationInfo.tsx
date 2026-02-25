"use client";

import { useEffect, useState } from "react";

type Props = {
  province: string;
  city: string;
};

export default function LocationInfo({ province, city }: Props) {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (!province || !city) return;

    fetch(`/api/weather?city=${city}&province=${province}&country=CA`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [province, city]);

  if (!province || !city) {
    return <p>Please select a province and a city.</p>;
  }

  if (!weather) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 className="text-xl font-bold">
        Weather in {city}, {province}
      </h2>

      <p>Temperature: {weather.temp}°C</p>
      <p>Feels like: {weather.feels}°C</p>
      <p>Pressure: {weather.pressure}</p>
      <p>Wind: {weather.wind}</p>
      <p>Air Quality (PM2.5): {weather.airQuality}</p>
    </div>
  );
}