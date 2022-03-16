import './style.css';
import {
  addScore, displayScore, getStorage, setStorage,
} from './addScore.js';

export const name = document.getElementById('name');
export const scoreInput = document.getElementById('scoreInput');
export const addScoreBtn = document.getElementById('addScoreBtn');
export const refreshBtn = document.getElementById('refreshBtn');
export const liScore = document.createElement('li');
const scoreContainer = document.getElementById('name-score');

const scoreList = getStorage() || [];

displayScore(scoreContainer, scoreList);

addScoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (name.value.length > 0 && scoreInput.value.length > 0) {
    addScore(scoreList, name.value, scoreInput.value);
    setStorage(scoreList);
    document.location.reload(true);
  }
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.location.reload(true);
});
