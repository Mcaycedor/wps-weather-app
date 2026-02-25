export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const city = searchParams.get("city");
  const province = searchParams.get("province");
  const country = searchParams.get("country") || "CA";

  if (!city || !province) {
    return Response.json(
      { error: "Missing city or province" },
      { status: 400 }
    );
  }

  const API_KEY = "fc9afdbb9ed519ba674f3124fb16bf41";

  // 1. Coordenadas
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${province},${country}&limit=1&appid=${API_KEY}`;
  const geoRes = await fetch(geoUrl);
  const geoData = await geoRes.json();

  if (!geoData.length) {
    return Response.json({ error: "City not found" }, { status: 404 });
  }

  const lat = geoData[0].lat;
  const lon = geoData[0].lon;

  // 2. Clima
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const weatherRes = await fetch(weatherUrl);
  const weather = await weatherRes.json();

  // 3. Calidad del aire
  const airUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const airRes = await fetch(airUrl);
  const air = await airRes.json();

  return Response.json({
    city,
    province,
    temp: weather.main.temp,
    feels: weather.main.feels_like,
    pressure: weather.main.pressure,
    wind: weather.wind.speed,
    sunrise: weather.sys.sunrise,
    sunset: weather.sys.sunset,
    airQuality: air.list[0].components.pm2_5
  });
}