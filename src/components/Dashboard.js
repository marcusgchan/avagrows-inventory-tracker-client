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

  {
    /* <>
<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
<script>
  window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
  window.myWidgetParam.push({id: 21,cityid: '6173331',appid: 'd81dc0a224128db1f3e4801161d1a725',units: 'metric',containerid: 'openweathermap-widget-21',  });  
  (function() {
  var script = document.createElement('script');
  script.async = true;
  script.charset = "utf-8";
  script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);  })();
  </script>

</> */
  }

  return (
    <LayoutContainer>
      {/* <div id="openweathermap-widget-21"></div> */}
      <p className={styles.city}>
        {weatherData.weather && weatherData.name}
        <h2 className={styles.degrees}>
          {weatherData.weather && weatherData.main.temp}°C
        </h2>
        <p className={styles.description}>
          {weatherData.weather && weatherData.weather[0].description}
        </p>
      </p>
    </LayoutContainer>
  );
}

export default Dashboard;
