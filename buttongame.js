const btnColors = ['lightcoral', 'lime', 'midnightblue', 'yellow', 'grey', 'cyan'];

function rotateColors() {
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');

  const currentColor1 = btn1.style.backgroundColor;
  const currentColor2 = btn2.style.backgroundColor;
  const currentColor3 = btn3.style.backgroundColor;
  const currentColor4 = btn4.style.backgroundColor;

  const nextColor1 = btnColors[(btnColors.indexOf(currentColor1) + 1) % btnColors.length];
  const nextColor2 = btnColors[(btnColors.indexOf(currentColor2) + 1) % btnColors.length];
  const nextColor3 = btnColors[(btnColors.indexOf(currentColor3) + 1) % btnColors.length];
  const nextColor4 = btnColors[(btnColors.indexOf(currentColor4) + 1) % btnColors.length];

  [btn1, btn2, btn3, btn4].forEach((btn, index) => {
    btn.style.transition = 'background-color 500ms ease-in-out';
    setTimeout(() => {
      btn.style.backgroundColor = btnColors[(index + 1) % btnColors.length];
    }, 500 * index);
  });
}

document.getElementById('spinButton').addEventListener('click', rotateColors);

function changeColorAndDisplayMessage(event) {
  const element = event.target;
  const originalColor = element.style.backgroundColor;
  const transitionTime = 1000;
  const color = 'cyan';
  const message = element.id === 'btn1' ? 'X2' : element.id === 'btn2' ? 'X3' : element.id === 'btn3' ? 'X5' : 'X50';

  element.style.transition = `background-color ${transitionTime / 1000}s`;
  element.style.backgroundColor = color;

  setTimeout(() => {
    element.style.backgroundColor = originalColor;
  }, transitionTime);

  setTimeout(() => {
    element.style.transition = '';
  }, transitionTime * 2);

  document.getElementById('message').textContent = message;
}

document.getElementById('btn1').addEventListener('click', changeColorAndDisplayMessage);
document.getElementById('btn2').addEventListener('click', changeColorAndDisplayMessage);
document.getElementById('btn3').addEventListener('click', changeColorAndDisplayMessage);
document.getElementById('btn4').addEventListener('click', changeColorAndDisplayMessage);
