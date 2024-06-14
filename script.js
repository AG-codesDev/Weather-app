document.getElementsByClassName("contentBox")[0].classList.add("visibility");
let inputbox = document.getElementsByTagName("input")[0];
let search_btn = document.getElementById("search_btn");
let weather_img = document.getElementById("image");
let temp = document.getElementById("temperature");
let Wcondition = document.getElementById("Wcondition");
let humidity = document.querySelectorAll("span")[1];
let windspeed = document.querySelectorAll("span")[3];

const showWeather = async (cityname) => {
  document.getElementsByClassName("navbar")[0].classList.add("navmoveup");
  document.getElementsByClassName("contentBox")[0].removeAttribute("hidden");
  const url = `http://api.weatherapi.com/v1/current.json?key=6dae3b9666804e129c2114032231107&q=${cityname}&aqi=no`;
  console.log(`showing data for ${cityname} PLZZ WAIT....`);
  const wdata = await fetch(url);
  const Wreport = await wdata.json();
  console.log(Wreport);
  weather_report = Wreport;
  inputbox.value = weather_report.location.name;
  temp.innerHTML = `${weather_report.current.temp_c}°C`;
  const wcondition = weather_report.current.condition.text;
  Wcondition.innerText = wcondition;

  weather_img.src = `${Wreport.current.condition.icon}`;

  humidity.innerHTML = `${weather_report.current.humidity}%`;
  windspeed.innerHTML = `${weather_report.current.wind_kph} KM/H`;
};

search_btn.addEventListener("click", () => {
  showWeather(inputbox.value);
});

// console.log(inputbox
inputbox.addEventListener("keydown", (e) => {
  // console.log(e.key);
  if (e.key === "Enter") {
    showWeather(inputbox.value);
  }
});
