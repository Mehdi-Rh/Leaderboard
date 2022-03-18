export const displayScore = (scoreContainer, scoreList) => {
  let liScore = '';
  Array.from(scoreList).forEach((element) => {
    liScore += `<li>${element.user} : ${element.score}</li>`;
  });
  scoreContainer.innerHTML = liScore;
};

export async function createGame(url) {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My cool new game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
}

export async function addScore(url, name, scoreRes) {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: scoreRes,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
}

export async function getScore(url, scoreContainer) {
  let data = await fetch(url);
  data = await data.json();
  displayScore(scoreContainer, data.result);
}
