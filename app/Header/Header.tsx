"use client"
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
  BritishColumbia: [
    "Vancouver",
    "Victoria",
    "Surrey",
    "Burnaby",
    "Richmond",
    "Coquitlam",
    "Kelowna",
    "Kamloops"
  ],
  Alberta: [
    "Calgary",
    "Edmonton",
    "Red Deer",
    "Lethbridge",
    "Medicine Hat",
    "Grande Prairie"
  ],
  Manitoba: [
    "Winnipeg",
    "Brandon",
    "Steinbach"
  ],
  Saskatchewan: [
    "Saskatoon",
    "Regina",
    "Prince Albert"
  ],
  NovaScotia: [
    "Halifax",
    "Sydney",
    "Truro"
  ],
  NewBrunswick: [
    "Moncton",
    "Saint John",
    "Fredericton"
  ],
  NewfoundlandAndLabrador: [
    "St. John's",
    "Corner Brook"
  ],
  PrinceEdwardIsland: [
    "Charlottetown"
  ]
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
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <strong>Canada</strong>

      <select
        value={province}
        onChange={(e) => handleProvinceChange(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
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
        style={{ marginLeft: "10px" }}
      >
        <option value="">Select city</option>
        {province &&
          canadaData[province].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
      </select>
    </header>
  );
};

export default Header;
