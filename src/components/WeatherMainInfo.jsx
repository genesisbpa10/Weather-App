
function WeatherMainInfo({ weather }) {
  return (
    <div>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
        <div>
            <div>
                <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.text}  width='128'
                />
            </div>
            <div>
                <div>{weather?.current.condition.text}</div>
                <div>{weather?.current.temp_c}°</div>
            </div>
        </div>
      
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.71193692513!2d-0.38178583985785625!3d51.528735196048615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sar!4v1653599679399!5m2!1ses-419!2sar" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};


export default WeatherMainInfo;



















