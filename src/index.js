import './style.css';
import {
  addScore, getScore, createGame,
} from './modules.js';

const name = document.getElementById('name');
const scoreInput = document.getElementById('scoreInput');
const addScoreBtn = document.getElementById('addScoreBtn');
const refreshBtn = document.getElementById('refreshBtn');
const scoreContainer = document.getElementById('name-score');

const urlApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Y52sP8QlRTwtWobzNK6P/scores/';

createGame(urlApi);

addScoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore(url, name.value, scoreInput.value);
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getScore(url, scoreContainer);
});
