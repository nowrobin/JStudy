



function onGeook(postion){
    const lat = postion.coords.latitude;
    const lng = postion.coords.longitude;
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        console.log(data.name);
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        })
} 
function onGeoError(){
    alert ("can't not find you ");
}

navigator.geolocation.getCurrentPosition(onGeook,onGeoError);

