type WeatherAlertProps = {
  province: string;
  city: string;
};

const WeatherAlert: React.FC<WeatherAlertProps> = ({ province, city }) => {
  if (!province || !city) return null;

  let message = "";
  let backgroundColor = "#e3f2fd"; // default light blue

  if (province === "Quebec") {
    message = "Cold temperatures are common during winter ❄️";
    backgroundColor = "#d0ebff";
  } 
  else if (province === "Alberta") {
    message = "Strong winds may occur in this region 💨";
    backgroundColor = "#fff3cd";
  } 
  else if (province === "BritishColumbia") {
    message = "Frequent rainfall expected 🌧";
    backgroundColor = "#d1ecf1";
  } 
  else if (province === "Ontario") {
    message = "Weather conditions vary throughout the year 🌤";
    backgroundColor = "#e2f0cb";
  } 
  else {
    message = "Check local forecasts for detailed weather information.";
  }

  return (
    <div
      style={{
        backgroundColor,
        padding: "12px",
        margin: "15px",
        borderRadius: "6px",
        textAlign: "center",
        border: "1px solid #ccc",
      }}
    >
      <strong>Weather Information for {city}, {province}</strong>
      <p style={{ marginTop: "5px" }}>{message}</p>
    </div>
  );
};

export default WeatherAlert;
