// DO NOT show API KEY on js file
const API_KEY = `3a192f812c97cd46fbfee621446cbfc2`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}
loadTemperature('dhaka');

