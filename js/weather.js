//날씨 & 위치 //
const API_KEY = "2193ab4972786d13f9b1049b4f9f0f59";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(res=>res.json()).then(data=>{
        const city = document.querySelector("#weather .location");
        const weather = document.querySelector("#weather .weather");
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);