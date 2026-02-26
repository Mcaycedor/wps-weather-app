type WeatherAlertProps = {
  province: string;
  city: string;
};

const WeatherAlert: React.FC<WeatherAlertProps> = ({ province, city }) => {
  if (!province || !city) return null;

  let message = "";
  let color = "#e3f2fd"; // default blue

  if (province === "Quebec") {
    message = "Cold winter conditions are common in this region ❄️";
    color = "#0c3250";
  } else if (province === "Alberta") {
    message = "Strong winds may occur throughout the year 💨";
    color = "#d3a81b";
  } else if (province === "BritishColumbia") {
    message = "Rainfall is frequent on the west coast 🌧";
    color = "#c74c13";
  } else if (province === "Ontario") {
    message = "Weather varies significantly between seasons 🌤";
    color = "#637a3d";
  } else {
    message = "Weather conditions may vary in this region.";
  }

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "12px",
        margin: "15px 0",
        borderRadius: "6px",
        textAlign: "center",
        border: "1px solid #ccc",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <strong>Weather Alert for {city}, {province}</strong>
      <p style={{ marginTop: "6px" }}>{message}</p>
    </div>
  );
};

export default WeatherAlert;
