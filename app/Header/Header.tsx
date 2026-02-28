"use client";
import "./Header.css";
import React, { useState } from "react";

const canadaData: Record<string, string[]> = {
  Quebec: [
    "Montreal",
    "Quebec City",
    "Laval",
    "Gatineau",
    "Longueuil",
    "Sherbrooke",
    "Trois-Rivières",
    "Saguenay",
    "Drummondville",
    "Saint-Jérôme"
  ],
  Ontario: [
    "Toronto",
    "Ottawa",
    "Mississauga",
    "Brampton",
    "Hamilton",
    "London",
    "Kitchener",
    "Waterloo",
    "Cambridge",
    "Windsor",
    "Guelph",
    "Kingston",
    "Barrie",
    "Sudbury",
    "Thunder Bay"
  ],
  Alberta: [
    "Calgary",
    "Edmonton",
    "Red Deer",
    "Lethbridge",
    "Medicine Hat",
    "Grande Prairie"
  ],
  Manitoba: ["Winnipeg", "Brandon", "Steinbach"],
  Saskatchewan: ["Saskatoon", "Regina", "Prince Albert"]
};

type HeaderProps = {
  onLocationChange: (province: string, city: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onLocationChange }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const handleProvinceChange = (value: string) => {
    setProvince(value);
    setCity("");
    onLocationChange(value, "");
  };

  const handleCityChange = (value: string) => {
    setCity(value);
    onLocationChange(province, value);
  };

  return (
    <header className="weather-header">
      <div className="weather-text-block">
        <h1 className="weather-title">Weather Across Canada</h1>
        <p className="weather-subtitle">
          Explore the climate — select a province and city to begin.
        </p>
      </div>

      <div className="weather-selects">
        <strong>Canada</strong>

        <select value={province} onChange={(e) => handleProvinceChange(e.target.value)}>
          <option value="">Select province</option>
          {Object.keys(canadaData).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => handleCityChange(e.target.value)}
          disabled={!province}
        >
          <option value="">Select city</option>
          {province &&
            canadaData[province].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
        </select>
      </div>
    </header>
  );
};

export default Header;