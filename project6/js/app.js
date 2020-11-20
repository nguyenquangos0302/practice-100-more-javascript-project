// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll('.btn')
  const imageDIV = document.querySelector('.img-container')
  
  let count = 0;

  const arr = [...buttons];

  arr.forEach(button => {
    button.addEventListener('click', function(event) {
      if (button.classList.contains('btn-left')) {
        count--;
      } else if (button.classList.contains('btn-right')) {
        count++;
      }

      if (count < 0) {
        count = pictures.length - 1;
      } else if (count > pictures.length - 1) {
        count = 0;
      }

      imageDIV.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`;

      

    })
  })

})();
