(function(){
  const buttons = document.querySelectorAll('.counterBtn')
  let count= 0

  //Add event listeners and functionailty to each button  
  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      if (button.className === 'prevBtn') {
        count--;
      } else {
        count++;
      }

      

    })
  })
})()