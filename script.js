const apiKey = "3f0f6af49b5cb2fe740e95d78672547a";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchBar = document.querySelector("#search");
const searchBtn = document.querySelector("#btn");

const showTemp = document.querySelector(".show-temp");
const showHumidity = document.querySelector(".show-humidity");
const showSpeed = document.querySelector(".show-speed");

const weatherIcon = document.querySelector("#icon");


const getFacts = async (city) => {
    let responce = await fetch(URL + `q=${city}` + `&appid=${apiKey}`);
    console.log(responce);
    let data = await responce.json();
    console.log(data);
    console.log(200, city);

    showTemp.innerHTML = Math.round(data.main.temp) + " " +"ºC";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/sun.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/mist.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "/snow.png";
    }

    showTemp.style.fontSize = "x-large";
    showTemp.style.fontWeight = "bolder";
    showTemp.style.color = "white";

    document.querySelector("#city").innerHTML = data.name;


    showHumidity.innerHTML = data.main.humidity + "%";
    showHumidity.style.fontSize = "x-large";
    showHumidity.style.fontWeight = "bolder";
    showHumidity.style.color = "white"

    showSpeed.innerHTML = data.wind.speed + "km/h";
    showSpeed.style.fontSize = "x-large";
    showSpeed.style.fontWeight = "bolder";
    showSpeed.style.color = "white"


}

searchBtn.addEventListener("click", () => {
    // console.log(searchBar.value);
    getFacts(searchBar.value);

})

getFacts();