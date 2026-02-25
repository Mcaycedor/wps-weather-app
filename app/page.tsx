"use client";
import { useState } from "react";
import Header from "./Header/Header";
import LocationInfo from "./LocationInfo/LocationInfo";

export default function Home() {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  return (
  
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">


         <Header
          onLocationChange={(p, c) => {
            setProvince(p);
            setCity(c);
          }}
        />

        <LocationInfo province={province} city={city} />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          
        </div>
      </main>
  
  );
}
