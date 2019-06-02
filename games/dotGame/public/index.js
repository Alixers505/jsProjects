(function() {
  const scoreBoard = document.getElementById('scoreBoard');
  const gameZone = document.getElementById('gameZone');
  const dotOptions = {
    color: ['#1f3e5a', '#145051', '#3c13c1','#c0c0c0'],
    max: 100,
    min: 10,
  };
  const initialValue = 0;

  // Random value -- used for dot size, color, and x position
  const randomValue = (min, max) => {
    let num = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  };

  // Create Dot
  const createDot = () => {
    const newDot = document.createElement('span');
    const size = randomValue(dotOptions.min, dotOptions.max);
    const xPos = randomValue(size/2, dotOptions.max - size/2);
    newDot.className = 'dot';
    newDot.style.backgroundColor = dotOptions.color[randomValue(0, 3)];
    newDot.style.width = size + 'px';
    newDot.style.height = size + 'px';
    newDot.style.left = xPos + 'vw';
    return gameZone.appendChild(newDot);
  };
  createDot();

  // Create Dot every 1000ms



  // Remove Dot on click
  const removeOnClick = () => {

  };

})();
