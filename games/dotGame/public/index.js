(function () {
  //* Utility Functions *//
  // Random value -- used for dot size, color, and x position
  const randomValue = (min, max) => {
    const absoluteMin = Math.ceil(min);

    return Math.floor(Math.random() * (Math.floor(max) - absoluteMin + 1)) + absoluteMin;
  };

  // Get random color from dot color array
  const getPointColor = (colorsArray, points) => colorsArray[points];

  //* Game Options *//
  const dotOptions = {
    colors: {
      10: '#c13c13',
      9: '#342212',
      8: '#c0c0c0',
      7: '#196465',
      6: '#3c13c1',
      5: '#3e5a1f',
      4: '#281c3c',
      3: '#3c1c31',
      2: '#6e4900',
      1: '#1f3e5a'
    },
    max: 100,
    min: 10,
  };

  //* DOM Selectors *//
  const playerScoreEl = document.getElementById('playerScore');
  const speedSliderEl = document.getElementById('speedSlider');
  const gameZoneEl = document.getElementById('gameZone');
  const { height: gameHeight, width: gameWidth } = gameZoneEl.getBoundingClientRect();

  //* Game State *//
  const gameState = {
    currentDotSpeed: parseInt(speedSliderEl.value),
    scoreTotal: 0
  };

  //* Scoreboard Logic *//
  const updateScore = points => {
    gameState.scoreTotal += parseInt(points);
    playerScoreEl.innerHTML = gameState.scoreTotal;
  };

  //* Dot Logic *//
  const calculateDotScore = dotSize => {
    return Math.floor(11 - parseInt(dotSize, 10)/10);
  }

  const createDot = () => {
    const newDotEl = document.createElement('span');
    const size = randomValue(dotOptions.min, dotOptions.max);
    const xPos = randomValue(size / 2, gameWidth - size);
    const pointValue = calculateDotScore(size);
    const styles = {
      backgroundColor: getPointColor(dotOptions.colors, pointValue),
      height: `${ size }px`,
      left: `${ xPos }px`,
      top: '0px',
      width: `${ size }px`
    };

    Object.assign(newDotEl.style, styles);
    newDotEl.className = 'dot';
    newDotEl.setAttribute('pointValue', pointValue);
    newDotEl.addEventListener('click', removeDot);

    return gameZoneEl.appendChild(newDotEl);
  };

  const removeDot = (e) => {
    const { target } = e;
    const points = target.getAttribute('pointValue');

    target.classList.add('dot-removal');
    updateScore(points);
    setTimeout(() => target.remove(), 250);
    setTimeout(createDot, 750);
  };

  const dotMovement = () => {
    let dots = document.querySelectorAll('.dot');

    for (let dot of dots) {
      let size = dot.clientHeight;
      let topPos = parseInt(dot.style.top, 10);

      if (topPos >= parseInt(gameHeight, 10) - size - gameState.currentDotSpeed) {
        dot.remove();
      } else {
        dot.style.top = `${ topPos + gameState.currentDotSpeed }px`;
      }
    }
  };

  //* Slider Logic *//
  speedSliderEl.oninput = (e) => {
    gameState.currentDotSpeed = parseInt(e.target.value);
  };

  //* Initialize Game *//
  playerScoreEl.innerHTML = gameState.scoreTotal;

  // Create Initial Dot
  createDot();

  // Create dot every 1000ms
  const dotInterval = setInterval(createDot, 1000);

  // Move dots every 1000ms
  const movementInterval = setInterval(dotMovement, 1000);

})();
