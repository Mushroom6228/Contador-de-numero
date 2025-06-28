document.addEventListener('DOMContentLoaded', () => {
  const value = document.getElementById('value');
  const plusButton = document.getElementById('plus');
  const minusButton = document.getElementById('minus');
  const resetButton = document.getElementById('reset');

  let count = 0;
  let intervalId = null;

  const updateValue = () => {
    value.textContent = count;
  };

  const startCounting = (direction) => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      count += direction;
      updateValue();
    }, 100);
  };

  plusButton.addEventListener('mousedown', () => startCounting(1));
  minusButton.addEventListener('mousedown', () => startCounting(-1));

  document.addEventListener('mouseup', () => clearInterval(intervalId));

  resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
  });
})