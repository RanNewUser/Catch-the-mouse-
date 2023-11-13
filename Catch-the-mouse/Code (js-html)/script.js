let clickCount = 29;

// Receive all the objects to take into account
function handleClick() {
  const mouse = document.getElementById('mouse');
  const resultDiv = document.getElementById('result');
  const resultText = document.getElementById('result-text');
  const rulesText = document.getElementById('rules');
  const creditsText = document.getElementById('credits');

  // Increases click count
  clickCount++;

  // Updates rules
  rulesText.textContent = `Clicks: ${clickCount}/30`;

  // Checks if the game is won
  if (clickCount === 30) {
    resultText.textContent = 'You won the game!';
    resultDiv.style.display = 'flex';
    creditsText.style.display = 'block';
  }

  // Randomly generates target coordinates
  const targetX = Math.floor(Math.random() * window.innerWidth);
  const targetY = Math.floor(Math.random() * window.innerHeight);

  // Calculates the distance from the current position to the target coordinates
  const distanceX = targetX - mouse.offsetLeft;
  const distanceY = targetY - mouse.offsetTop;

  // Sets a random background color (for a rainbow effect)
  const randomColor = getRandomColor();
  mouse.style.backgroundColor = randomColor;

  // Sets the transform property to translate the mouse to the target coordinates
  mouse.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
}

function resetGame() {
  clickCount = 0;
  document.getElementById('rules').textContent =
    'Click the ball 30 times to win!';
  document.getElementById('result').style.display = 'none';
  document.getElementById('credits').style.display = 'none';

  // Reset the initial placement of the ball in the center
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  document.getElementById('mouse').style.left = `${centerX - 10}px`;
  document.getElementById('mouse').style.top = `${centerY - 10}px`;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.addEventListener('mousemove', function (e) {
  document.getElementById('x-value').textContent = e.x;
  document.getElementById('y-value').textContent = e.y;
});

// Initial placement of the ball in the center
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
document.getElementById('mouse').style.left = `${centerX - 10}px`;
document.getElementById('mouse').style.top = `${centerY - 10}px`;