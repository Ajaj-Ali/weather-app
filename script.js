const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const teampature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wing_speed = document.getElementById("wing-speed");

const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");
const container = document.querySelector(".container");

async function checkWeather(city) {
  const api_key = "0482036408653bea8d260499a4049d51";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod == `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    container.style.height = "520px";
    console.log("error");
    return;
  } else {
    weather_body.style.display = "flex";
    location_not_found.style.display = "none";
    container.style.height = "520px";
  }

  teampature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;

  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}`;

  wing_speed.innerHTML = `${weather_data.wind.speed}`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "img/cloud.png";
      break;
    case "Clear":
      weather_img.src = "img/clear.png";
      break;
    case "Rain":
      weather_img.src = "img/rain.png";
      break;
    case "Mist":
      weather_img.src = "img/mist.png";
      break;
    case "Snow":
      weather_img.src = "img/snow.png";
      break;
  }

  console.log(weather_data);
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
