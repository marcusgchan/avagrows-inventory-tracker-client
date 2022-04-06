import { useEffect, useState } from "react";
import LayoutContainer from "./LayoutContainer";
import tableServices from "../services/tableServices";
import styles from "./styles/Dashboard.module.css";

function Dashboard() {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    tableServices
      .getWeather()
      .then((result) => {
        setWeatherData(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <LayoutContainer>
      <section className={styles.city}>
        {weatherData.weather && weatherData.name}
        <h2 className={styles.degrees}>
          {weatherData.weather && weatherData.main.temp + "°C"}
        </h2>
        <p className={styles.description}>
          {weatherData.weather && weatherData.weather[0].description}
        </p>
      </section>
    </LayoutContainer>
  );
}

export default Dashboard;
