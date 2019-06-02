(function() {
  const scoreBoard = document.getElementById('scoreBoard');
  const playerScore = document.getElementById('playerScore');
  const speedSlider = document.getElementById('speedSlider');
  const gameZone = document.getElementById('gameZone');
  const gameHeight = gameZone.clientHeight;
  const gameWidth = gameZone.clientWidth;
  const dotOptions = {
    color: ['#1f3e5a', '#145051', '#3c13c1','#c0c0c0', '#281c3c', '#3c1c31','#6e4900'],
    max: 100,
    min: 10,
  };
  const initialValue = 0;
  let dotSpeed = parseInt(speedSlider.value);
  let scoreTotal = initialValue;
  playerScore.innerHTML = scoreTotal;

  speedSlider.oninput = () => {
    dotSpeed = parseInt(speedSlider.value);
  };

  // Random value -- used for dot size, color, and x position
  const randomValue = (min, max) => {
    let num = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  };

  const removeDot = (e) => {
    const target = e.target;
    target.remove();
    setTimeout(createDot, 1000);
    scoreTotal += Math.floor(11 - parseInt(target.style.height, 10)/10);
    playerScore.innerHTML = scoreTotal;
  };

  const createDot = () => {
    const newDot = document.createElement('span');
    const size = randomValue(dotOptions.min, dotOptions.max);
    const xPos = randomValue(size/2, gameWidth - size);
    newDot.className = 'dot';
    newDot.style.backgroundColor = dotOptions.color[randomValue(0, dotOptions.color.length - 1)];
    newDot.style.width = size + 'px';
    newDot.style.height = size + 'px';
    newDot.style.left = xPos + 'px';
    newDot.style.top = '0px';
    newDot.addEventListener('click', removeDot);
    return gameZone.appendChild(newDot);
  };

  const dotMovement = () => {
    let dots = document.getElementsByClassName('dot');
    for(let dot of dots) {
      let size = dot.clientHeight;
      let topPx = parseInt(dot.style.top, 10);

      if(topPx >= parseInt(gameHeight, 10) - size - dotSpeed) {
        dot.remove();
      } else {
        dot.style.top = topPx + dotSpeed + 'px';
      }
    }
  };

  // Add initial dot
  createDot();

  // Create dot every 1000ms
  const dotInterval = setInterval(createDot, 1000);

  // Move dots every 1000ms
  const movementInterval = setInterval(dotMovement, 1000);

})();
