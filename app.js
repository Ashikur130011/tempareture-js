const API_Key = "7f5e55468bf90edb17940ece9daae8fa";
const searchWeather= () =>{
    const searchCity = document.getElementById('search-text').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_Key}&units=metric`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}
const weatherStatus = (id, text) => {
    document.getElementById(id).innerText = text
}
const displayWeather = (data) => {
    console.log(data);
    weatherStatus('city', data.name)
    weatherStatus('tempareture', data.main.temp)
    weatherStatus('cloud', data.weather[0].main)
    weatherStatus('feel', data.main.feels_like)
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('icon').setAttribute('src',url)
}