import './style.css';
import getApi from './apiData';

const myApp = {
  currentCity: 'London',
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
    this.info = document.getElementById('info');
    this.wind = document.getElementById('wind');
    this.weather = document.getElementById('weather');
    this.disc = document.getElementById('disc');
    this.topIcon = document.getElementById('top-icon');
    this.time = document.getElementById('time');
  },
  bindEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.currentCity = this.search.value;
      this.getData();
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
    this.info.innerHTML = '';
    this.wind.innerHTML = '';
    this.weather.innerHTML = '';
    this.disc.innerText = '';
    this.time.innerHTML = '';
    this.title.innerText = result.name;
    this.disc.innerText = result.weather[0].description;
    this.topIcon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    const myTime = new Date(result.dt * 1000);
    console.log(myTime);
    this.time.innerText = myTime.toDateString();
    const info1 = document.createElement('span');
    info1.innerText = result.main.feels_like;
    const info2 = document.createElement('span');
    info2.innerText = result.main.humidity;
    const info3 = document.createElement('span');
    info3.innerText = result.main.pressure;

    const wind1 = document.createElement('span');
    wind1.innerText = result.wind.speed;

    const weather1 = document.createElement('span');
    weather1.innerText = result.weather[0].description;

    this.info.append(info1, info2, info3);
    this.wind.appendChild(wind1);
    this.weather.appendChild(weather1);
    console.log(this.wind.childNodes);
  },
};

myApp.init();

console.log('done');
