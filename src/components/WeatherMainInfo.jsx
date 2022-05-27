import styles from "../stylesheets/weatherMainInfo.module.css";

function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
            width="128"
          />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current.condition.text}
          </div>
          <div className={styles.current}>{weather?.current.temp_c}°</div>
        </div>
      </div>
      <div>
        {/**Falta modificar la parte del zoom de la imagen porque carga desde la vista de un país completo y no por ciudad, pero ya se actualiza con el cambio de estado de {weather}*/}


        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8116210.903910733!2d${weather?.location.lon}!3d${weather?.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sar!4v1653668549120!5m2!1sfr!2sar`}

          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default WeatherMainInfo;