const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display ="none"
})

const button = document.getElementById('btn').addEventListener('click', function(){
    const searchInput = document.getElementById('searchInput').value;
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=cbadeb9ac8c0b5a2e880b17448d46c7e`
    fetch(apiLink)
    .then( res => res.json())
    .then( data =>showInfo(data))

})

const img = document.getElementById('img')
const country = document.getElementById('country')
const temp = document.getElementById('temp')
const status = document.getElementById('status')

//showinfo function
function showInfo(info){
    if(info.weather[0].main=='Haze'){
        img.src ="./img/haze.png"
    }else if (info.weather[0].main=='Clouds'){
        img.src ="./img/cloudy-day.png"
    }else if(info.weather[0].main=='Rain'){
        img.src ="./img/raining.png"
    }else{
        img.src ="./img/weather.png"
    }
    console.log(info);
    country.innerText = info.name;
    temp.innerText = info.weather[0].main;
    status.innerText = `${(info.main.temp - 273.15).toFixed(2)}`;
} 
