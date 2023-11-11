const container = document.querySelectorAll('.container');
const serach = document.querySelectorAll('.search-box-button');
const weatherbox = document.querySelectorAll('.weather-box');
const weatherDetails = document.querySelectorAll('.weather-details');

  serach.addEventListener('click', () => {

    const APIkey = '58a04c5f78ffe27b4c853d045be5e021';
    const city = document.querySelector('.search-box input').Value;

    if (city =='')
      return;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=matric&appid=${APIkey}`)
       .then(response => response.json()).then(json => {


      const image = document.querySelector('.weather-box image');
      const temperature = document.querySelector('.weather-box temperature');
      const description = document.querySelector('.weather-box description');
      const humidity = document.querySelector('.weather-box humidity span');
      const wind = document.querySelector('.weather-box wind span');

        
      switch (json.weather[0].main){
        case 'Clear':
      
      }
  });

});