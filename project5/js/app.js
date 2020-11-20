(function () {
  const buttons = document.querySelectorAll('.counterBtn');
  const counter = document.getElementById('counter');
  let count = 0;

  //Add event listeners and functionailty to each button
  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      if (button.classList.contains('prevBtn')) {
        count--;
      } else {
        count++;
      }
      counter.innerHTML = count;
      if (count < 0) {
        counter.style.color = 'red';
      } else if (count > 0) {
        counter.style.color = 'green';
      }
    });
  });
})();

