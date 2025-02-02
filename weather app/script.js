const input = document.getElementById('input');
const searchImg = document.getElementById('searchimg');
const showWeather = document.querySelector('.showWeather');
const container = document.querySelector('.container');
const cross = document.getElementById('cross');

//event listener
searchImg.addEventListener('click', fetchWeatherData);
searchImg.addEventListener('click', ()=> {
    cross.style.display = "none";
});
input.addEventListener('click', () => {
    cross.style.display = "block";
});
cross.addEventListener('click', clear);


function clear() {
    input.value = "";
}

function fetchWeatherData() {
    let searchInputText = input.value.trim();
    if (searchInputText === "") {
        alert("Type the name of place.")
    }
    else{
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=ffb902c39ff64f2b88a90148240905&q=${searchInputText}&days=10&aqi=yes&alerts=yes`)
            .then(response => response.json())
            .then(data => {
                let html = "";
                const location = data.location;
                const forecast = data.forecast.forecastday[0];
                if(data) {
                    html += `
                        <div class="container">
                            <img src="${'https:' + forecast.day.condition.icon}" alt="Weather Icon">
                            <div class="temp">${forecast.day.avgtemp_c}°C</div>
                            <div class="location">${location.name}, ${location.country}</div>
                            <div class="condition">${forecast.day.condition.text}</div>
                        </div>
                    `
                } 
                showWeather.innerHTML = html;
            })
    }

}
