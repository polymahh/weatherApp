import './style.css';
import getApi from './apiData';

const myApp = {
  currentCity: 'safi',
  init() {
    this.casheDome();
    this.bindEvents();
    this.getData();
  },
  casheDome() {
    this.form = document.querySelector('form');
    this.search = document.getElementById('search');
    this.title = document.getElementById('title');
    this.body = document.getElementById('body');
    this.temp = document.getElementById('temp');
    this.wind = document.getElementById('wind');
    this.humidity = document.getElementById('humidity');
    this.disc = document.getElementById('disc');
    this.topIcon = document.getElementById('top-icon');
    this.time = document.getElementById('time');
  },
  bindEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (search.value === '') {
        alert('search field cant be empty');
      } else {
        this.currentCity = this.search.value;
        this.getData();
      }
    });
  },
  async getData() {
    const myApi = '6fd9327e12a11d54d3000a84df38e039';
    const promise = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.currentCity}&units=metric&APPID=${myApi}`
    );
    const result = await promise.json();

    console.log(result);
    this.render(result);
  },
  render(result) {
    this.temp.innerHTML = '';
    this.wind.innerHTML = '';
    this.humidity.innerHTML = '';
    this.disc.innerText = '';
    this.time.innerHTML = '';
    this.title.innerText = result.name;
    this.disc.innerText = result.weather[0].description;
    this.topIcon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    const myTime = new Date(result.dt * 1000);
    console.log(myTime);
    this.time.innerText = myTime.toDateString();
    const temp1 = document.createElement('span');
    temp1.innerText = `${result.main.feels_like} °C`;

    const wind1 = document.createElement('span');
    wind1.innerText = result.wind.speed;

    const humidity1 = document.createElement('span');
    humidity1.innerText = `${result.main.humidity} %`;

    this.temp.appendChild(temp1);
    this.wind.appendChild(wind1);
    this.humidity.appendChild(humidity1);
    console.log(this.wind.childNodes);
  },
};

myApp.init();

console.log('done');
