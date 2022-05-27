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
        {/*Falta solucionar el problema con la URL que proporciona Google Maps para obtener el mapa con la locación buscada. El actual es del de Londres, puesto por defecto, pero el objetivo es actualizar el estado (cosa que sí se está logrando, pero no logro armart una URL correcta que me de la ubicación buscada porque no encuentro el formato/orden/significado de los parámetros de la URL para poder armar la nuea desde ${weather?.location.lon} y ${weather?.location.lat}*/}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.71193692513!2d${weather?.location.lon}2!3d${weather?.location.lon}!2m3!1f0!2f0!3f0!3m2!1i1!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sar!4v1653599679399!5m2!1ses-419!2sar`}
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
}
export default WeatherMainInfo;
