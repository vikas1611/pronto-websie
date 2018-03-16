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
var modal1 = document.getElementById('simpleModal0');
var modal2 = document.getElementById('simpleModal1');

var modalBtn = document.getElementById('modalBtn');
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');

var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

modalBtn.addEventListener('click', openModal);
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);

closeBtn.addEventListener('click', closeModal);
closeBtn1.addEventListener('click', closeModal1);
closeBtn2.addEventListener('click', closeModal2);

window.addEventListener('click', exit);
window.addEventListener('click', exit1);
window.addEventListener('click', exit2);

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

function openModal1() {
  modal1.style.display = 'block';
}
// When click on the close button
function closeModal1() {
  modal1.style.display = 'none';
}
// When click on the window outside the modal
function exit1(e) {
  if(e.target == modal1){
  modal1.style.display = 'none';
  }
}

function openModal2() {
  modal2.style.display = 'block';
}
// When click on the close button
function closeModal2() {
  modal2.style.display = 'none';
}
// When click on the window outside the modal
function exit2(e) {
  if(e.target == modal2){
  modal2.style.display = 'none';
  }
}