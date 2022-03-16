export const addScore = (scoreList, name, score) => {
  const newScore = {
    userName: name,
    score,
  };
  scoreList.push(newScore);
};

export const displayScore = (scoreContainer, scoreList) => {
  scoreList.forEach((element) => {
    const liScore = document.createElement('li');
    liScore.innerHTML = `${element.userName} : ${element.score}`;
    scoreContainer.appendChild(liScore);
  });
};

export const setStorage = (scoreList) => {
  localStorage.setItem('scoreInfo', JSON.stringify(scoreList));
};

export const getStorage = () => JSON.parse(localStorage.getItem('scoreInfo'));
