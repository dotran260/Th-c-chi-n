const input = document.querySelector('.input-search')
const city = document.querySelector(".region .city");
const country = document.querySelector(".region .country");
const time = document.querySelector(".time");
const temperature = document.querySelector(".temperature .value");
const shortDesc = document.querySelector(".short-desc");

const visibility = document.querySelector(".visibility span");
console.log(visibility.innerHTML)
const wind = document.querySelector(".wind span");
const cloud = document.querySelector(".cloud span");
// console.log(temperature)


input.onkeyup = ((e) => {
    if (e.code == 'Enter') {
        getApi(e.target.value)
    }

})


function getApi(valueInput) {
    var weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${valueInput || 'ha noi'}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    fetch(weatherApi)
        .then(response => response.json())
        .then(api => renderCourses(api))
    function renderCourses(api) {
        city.innerHTML = api.name;
        country.innerHTML = api.sys.country;
        time.innerHTML = new Date().toLocaleString();
        const temp = Math.round(api.main.temp);
        temperature.innerHTML = temp;
        temp >= 18
            ? (document.body.className = "hot")
            : (document.body.className = "cold");

        temp >= 18
            ? (document.querySelector('#app').className = "hot")
            : (document.querySelector('#app').className = "cold");
        // shortDesc.innerHTML = api.weather[0].main;
        visibility.innerHTML = api.visibility + " (m)";
        console.log(visibility)
        wind.innerHTML = api.wind.speed + " (m/s)";
        cloud.innerHTML = api.clouds.all + " (%)";
    }
}




getApi()









