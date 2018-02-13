(function() {
    
  var button = document.querySelectorAll('.button');
  
  function controls() {
    $(this).addClass('selected').siblings('button').removeClass('selected');
    $('.slideDiv').animate({
      top: -$('.container').height() * $(this).index()
    }, 450);
  }
  
  /***Event Listeners***/
  for ( var i = 0; i < button.length; i++ ) {
    button[i].addEventListener('click', controls, false);
  }
  
})();


// OFF CANVAS JS
// Elements
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', exit);

 // Display the modal when clicked on the image
function openModal() {
  modal.style.display = 'block';
}
// When click on the close button
function closeModal() {
  modal.style.display = 'none';
}
// When click on the window outside the modal
function exit(e) {
  if(e.target == modal){
  modal.style.display = 'none';
  }
}