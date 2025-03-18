document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Toggle the 'selected' class when the button is clicked
        this.classList.toggle('selected');
      });
    });
  });
  