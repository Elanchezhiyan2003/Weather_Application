


// Display current time and date
const CurrentTime = new Date().toLocaleTimeString('en-IN');
document.getElementById('current-time').innerHTML = `${CurrentTime}`;
const CurrentDate = new Date().toLocaleDateString('en-IN');
document.getElementById('current-date').innerHTML = `${CurrentDate}`;

let API_KEY = '7ea42500849c2cc758bc2cb50f83aea9';
const getWeatherData = (city) => {
    const URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

    return fetch(Full_Url) 
        .then(response => response.json()) 
        .catch(err => {
            console.error("Error fetching weather data:", err);
            throw err; 
        });
};

const searchCity = () => {
    const city = document.getElementById('city-input').value;

    getWeatherData(city)
        .then(weatherData => {
          showWeatherData(weatherData); 
        })
        .catch(err => {
            console.log("Error:", err); 
        });
};

// Weather Forecasting
const showWeatherData = (weatherData) => {
    const currentData = weatherData.list[0];

    document.getElementById('main-name').innerHTML = currentData.weather[0].main;
    document.getElementById('cloud').innerHTML = currentData.clouds.all + '%';
    document.getElementById('wind').innerHTML = currentData.wind.speed + ' m/s';
    document.getElementById('Humidity').innerHTML = currentData.main.humidity + '%';
    document.getElementById('Pressure').innerHTML = currentData.main.pressure + 'hPa';
    
    const sunRise = weatherData.city.sunrise;
    const SunRiseTime = new Date(sunRise * 1000).toLocaleTimeString('en-IN');
    document.getElementById('riseDate').innerHTML = `${SunRiseTime}`;

    const sunSet = weatherData.city.sunset;
    const SunSetTime = new Date(sunSet * 1000).toLocaleTimeString('en-IN');
    document.getElementById('sunDate').innerHTML = `${SunSetTime}`;

    const temperatureInCelsius = ((currentData.main.temp - 32) * 5 / 9).toFixed(2);
    const tepRound = Math.round(temperatureInCelsius);
    document.getElementById('celsius-fahrenheit').innerHTML = `${tepRound}°C`;

    //5 Days Forecasting
    const day1Data = weatherData.list[0];
    //get current day on that day
    const timestamp1 = day1Data.dt;
    const date1 =new Date(timestamp1 * 1000);
    const dayOfWeek1 = date1.getDay();
    const weekday1= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName1 = weekday1[dayOfWeek1];
    document.getElementById('day1').innerHTML= dayName1;
    
    const temperatureInCelsius1 = ((day1Data.main.temp - 32) * 5 / 9).toFixed(2);
    const tepRound1 = Math.round(temperatureInCelsius1);
    document.getElementById('day1Min').innerHTML= `${tepRound1}°C`;

    const day2Data = weatherData.list[5];
    const timestamp2 = day2Data.dt;
    const date2 =new Date(timestamp2 * 1000);
    const dayOfWeek2 = date2.getDay();
    const weekday2= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName2 = weekday2[dayOfWeek2];
    document.getElementById('day2').innerHTML= dayName2;
    
    const temperatureInCelsius2 = ((day2Data.main.temp - 32) * 5 / 9).toFixed(2);
    const tepRound2 = Math.round(temperatureInCelsius2);
    document.getElementById('day2Min').innerHTML= `${tepRound2}°C`;

    const day3Data = weatherData.list[12];
    const timestamp3 = day3Data.dt;
    const date3 =new Date(timestamp3 * 1000);
    const dayOfWeek3 = date3.getDay();
    const weekday3= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName3 = weekday3[dayOfWeek3];
    document.getElementById('day3').innerHTML= dayName3;

    const temperatureInCelsius3 = ((day3Data.main.temp - 32) * 5 / 9).toFixed(2);
    const tepRound3 = Math.round(temperatureInCelsius3);
    document.getElementById('day3Min').innerHTML= `${tepRound3}°C`;

    const day4Data = weatherData.list[21];
    
    const timestamp4 = day4Data.dt;
    const date4 =new Date(timestamp4 * 1000);
    const dayOfWeek4 = date4.getDay();
    const weekday4= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName4 = weekday4[dayOfWeek4];
    document.getElementById('day4').innerHTML= dayName4;

    const temperatureInCelsius4 = ((day4Data.main.temp - 32) * 5 / 9).toFixed(2);
    const tepRound4 = Math.round(temperatureInCelsius4);
    document.getElementById('day4Min').innerHTML= `${tepRound4}°C`;

    const day5Data = weatherData.list[29];
    const timestamp5 = day5Data.dt;
    const date5 =new Date(timestamp5 * 1000);
    const dayOfWeek5 = date5.getDay();
    const weekday5= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName5 = weekday5[dayOfWeek5];
    document.getElementById('day5').innerHTML= dayName5;
    
    const temperatureInCelsius5 = ((day5Data.main.temp - 32) * 5 / 9).toFixed(2);
    const tepRound5 = Math.round(temperatureInCelsius5);
    document.getElementById('day5Min').innerHTML= `${tepRound5}°C`;
};




